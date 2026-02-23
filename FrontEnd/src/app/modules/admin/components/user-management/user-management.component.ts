import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { User, Role } from '../../../auth/models/user.model';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {
  private adminService = inject(AdminService);
  private notificationService = inject(NotificationService);
  
  users = signal<User[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);
  selectedUser = signal<User | null>(null);
  showDeleteConfirm = signal(false);
  
  readonly Role = Role;

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading.set(true);
    this.error.set(null);

    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erreur lors du chargement des utilisateurs');
        this.loading.set(false);
        console.error('Error loading users:', err);
      }
    });
  }

  updateUserRole(userId: number, newRole: string): void {
    this.adminService.updateUserRole(userId, newRole).subscribe({
      next: (updatedUser) => {
        const users = this.users();
        const index = users.findIndex(u => u.id === userId);
        if (index !== -1) {
          users[index] = updatedUser;
          this.users.set([...users]);
        }
        this.notificationService.success('Rôle mis à jour avec succès.');
      },
      error: (err) => {
        console.error('Error updating user role:', err);
        this.notificationService.error('Erreur lors de la mise à jour du rôle.');
      }
    });
  }

  confirmDelete(user: User): void {
    this.selectedUser.set(user);
    this.showDeleteConfirm.set(true);
  }

  cancelDelete(): void {
    this.selectedUser.set(null);
    this.showDeleteConfirm.set(false);
  }

  deleteUser(): void {
    const user = this.selectedUser();
    if (!user) return;

    this.adminService.deleteUser(user.id).subscribe({
      next: () => {
        const users = this.users().filter(u => u.id !== user.id);
        this.users.set(users);
        this.cancelDelete();
        this.notificationService.success('Utilisateur supprimé avec succès.');
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        this.notificationService.error('Erreur lors de la suppression de l\'utilisateur.');
        this.cancelDelete();
      }
    });
  }

  getRoleBadgeClass(role: Role | string): string {
    return role === Role.ADMIN || role === 'ADMIN' ? 'role-admin' : 'role-user';
  }

  getRoleLabel(role: Role | string): string {
    return role === Role.ADMIN || role === 'ADMIN' ? 'Administrateur' : 'Utilisateur';
  }

  formatDate(date: string | Date): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

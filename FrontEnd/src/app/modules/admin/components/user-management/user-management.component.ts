import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { User, Role, UserRequest } from '../../../auth/models/user.model';
import { UserDto } from '../../models/user-dto.model'; // I'll need to create this or import it
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent implements OnInit {
  private adminService = inject(AdminService);
  private notificationService = inject(NotificationService);

  users = signal<User[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  // Modals and Drawer state
  showRoleConfirm = signal(false);
  pendingRoleChange = signal<{ userId: string, newRole: string } | null>(null);
  showDeleteConfirm = signal(false);
  selectedUserForDelete = signal<User | null>(null);

  isDrawerOpen = signal(false);
  selectedUserForDrawer = signal<User | null>(null);
  activeDrawerTab = signal<'profil' | 'resultats' | 'formations' | 'prediction' | 'activite'>('profil');

  // Filters & Search
  searchTerm = signal('');
  filterStatut = signal('');
  filterRole = signal('');
  filterDepartement = signal('');
  filterRisque = signal('');
  filterTest = signal('');

  // Bulk selection
  selectedUserIds = signal<Set<string>>(new Set());

  // Create/Edit Modal state
  showUserModal = signal(false);
  isEditing = signal(false);
  userForm = signal<UserDto.CreateRequest>({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    department: '',
    position: '',
    role: Role.USER,
    isActive: true
  });
  submitting = signal(false);

  // Stats computed from users list
  stats = computed(() => {
    const all = this.users();
    return {
      total: all.length,
      actifs: all.filter(u => u.statut === 'Actif' || u.isActive).length,
      onboarding: all.filter(u => u.statut === 'Onboarding').length,
      aRisque: all.filter(u => u.riskLevel === 'À risque').length,
      sansTest: all.filter(u => !u.testsCount || u.testsCount === 0).length,
      sansDepartement: all.filter(u => !u.department).length
    };
  });

  // Filtered users list
  filteredUsers = computed(() => {
    let filtered = this.users();
    const term = this.searchTerm().toLowerCase();
    
    if (term) {
      filtered = filtered.filter(u => 
        (u.firstName?.toLowerCase().includes(term)) ||
        (u.lastName?.toLowerCase().includes(term)) ||
        (u.email?.toLowerCase().includes(term)) ||
        (u.department?.toLowerCase().includes(term)) ||
        (u.position?.toLowerCase().includes(term))
      );
    }

    if (this.filterStatut()) {
      filtered = filtered.filter(u => u.statut === this.filterStatut() || (this.filterStatut() === 'Actif' && u.isActive));
    }
    if (this.filterRole()) {
      filtered = filtered.filter(u => u.role === this.filterRole());
    }
    if (this.filterDepartement()) {
      filtered = filtered.filter(u => u.department === this.filterDepartement());
    }
    if (this.filterRisque() === 'a-risque') {
      filtered = filtered.filter(u => u.riskLevel === 'À risque');
    }
    if (this.filterTest() === 'sans-test') {
      filtered = filtered.filter(u => !u.testsCount || u.testsCount === 0);
    }
    if (this.filterTest() === 'sans-formation') {
      filtered = filtered.filter(u => !u.formationsCount || u.formationsCount === 0);
    }

    return filtered;
  });

  readonly Role = Role;

  // Mock data for drawer
  mockTests = [
    { name: 'Soft Skills - Leadership', date: '2023-10-15', score: 85 },
    { name: 'Tech - Frontend Angular', date: '2023-11-02', score: 92 }
  ];

  mockFormations = [
    { name: 'Architecture Angular Avancée', status: 'En cours', progress: 45 },
    { name: 'Communication Bienveillante', status: 'Terminée', progress: 100 }
  ];

  mockActivities = [
    { icon: '💻', text: 'Connexion depuis Paris', date: 'Il y a 2 heures' },
    { icon: '📝', text: 'A complété le test Tech', date: 'Il y a 2 jours' },
    { icon: '🎓', text: 'A commencé la formation Angular', date: 'Il y a 1 semaine' }
  ];

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading.set(true);
    this.error.set(null);

    this.adminService.getAllUsers().subscribe({
      next: (data) => {
        // Hydrate with some mock stats if missing from backend for demo purposes
        const enhancedData = data.map(u => ({
          ...u,
          statut: u.statut || (u.isActive ? 'Actif' : 'Onboarding'),
          scoreMoyen: u.scoreMoyen !== undefined ? u.scoreMoyen : Math.random() * 0.4 + 0.6, // fake score 60-100%
          testsCount: u.testsCount !== undefined ? u.testsCount : Math.floor(Math.random() * 5),
          formationsCount: u.formationsCount !== undefined ? u.formationsCount : Math.floor(Math.random() * 3),
          lastLogin: u.lastLogin || new Date(Date.now() - Math.random() * 10000000000).toISOString(),
          riskLevel: u.riskLevel || (Math.random() > 0.8 ? 'À risque' : 'Prêt')
        }));
        this.users.set(enhancedData);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erreur lors du chargement des utilisateurs');
        this.loading.set(false);
        console.error('Error loading users:', err);
      }
    });
  }

  // Formatting helpers
  formatScore(score: number | undefined): string {
    if (score === undefined) return '0%';
    // Fix divide by 100 bug: if score is <= 1, assume it's a decimal (e.g. 0.77). If > 1, assume it's already percentage.
    const percentage = score <= 1 ? score * 100 : score;
    return `${Math.round(percentage)}%`;
  }

  formatRelativeTime(dateString: string | undefined): string {
    if (!dateString) return 'Jamais';
    const date = new Date(dateString);
    const diff = Math.floor((new Date().getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return 'Aujourd\'hui';
    if (diff === 1) return 'Hier';
    if (diff < 30) return `Il y a ${diff} jours`;
    if (diff < 365) return `Il y a ${Math.floor(diff / 30)} mois`;
    return `Il y a ${Math.floor(diff / 365)} ans`;
  }

  formatDate(date: string | Date | undefined): string {
    if (!date) return '—';
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  // Role Management
  initiateRoleChange(userId: string, event: Event): void {
    const newRole = (event.target as HTMLSelectElement).value;
    const user = this.users().find(u => u.id === userId);
    if (!user || user.role === newRole) return;

    this.pendingRoleChange.set({ userId, newRole });
    this.showRoleConfirm.set(true);

    // Revert the select visually until confirmed
    (event.target as HTMLSelectElement).value = user.role;
  }

  confirmRoleChange(): void {
    const pending = this.pendingRoleChange();
    if (!pending) return;

    this.adminService.updateUserRole(pending.userId, pending.newRole).subscribe({
      next: (updatedUser) => {
        const users = this.users();
        const index = users.findIndex(u => u.id === pending.userId);
        if (index !== -1) {
          users[index] = { ...users[index], role: pending.newRole as Role };
          this.users.set([...users]);
        }
        this.notificationService.success('Rôle mis à jour avec succès.');
        this.cancelRoleChange();
      },
      error: (err) => {
        console.error('Error updating user role:', err);
        this.notificationService.error('Erreur lors de la mise à jour du rôle.');
        this.cancelRoleChange();
      }
    });
  }

  cancelRoleChange(): void {
    this.pendingRoleChange.set(null);
    this.showRoleConfirm.set(false);
  }

  // Create / Edit Methods
  openAddModal(): void {
    this.isEditing.set(false);
    this.userForm.set({
      username: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      department: '',
      position: '',
      role: Role.USER,
      isActive: true
    });
    this.showUserModal.set(true);
  }

  openEditModal(user: User, event?: Event): void {
    if (event) event.stopPropagation();
    this.isEditing.set(true);
    this.selectedUserForDelete.set(user); // Reuse for editing
    this.userForm.set({
      username: user.username || '',
      email: user.email || '',
      password: '', // Leave empty for edit
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      department: user.department || '',
      position: user.position || '',
      role: user.role || 'USER',
      isActive: user.isActive ?? true
    });
    this.showUserModal.set(true);
  }

  closeUserModal(): void {
    this.showUserModal.set(false);
  }

  saveUser(): void {
    const form = this.userForm();
    if (!form.email || !form.firstName || !form.lastName) {
      this.notificationService.error('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    this.submitting.set(true);
    if (this.isEditing()) {
      const userId = this.selectedUserForDelete()?.id;
      if (!userId) return;
      
      // Don't send empty password on update
      const updateData = { ...form };
      if (!updateData.password) delete updateData.password;

      this.adminService.updateUser(userId, updateData).subscribe({
        next: (updatedUser) => {
          this.users.update(all => all.map(u => u.id === userId ? { ...u, ...updatedUser } : u));
          this.notificationService.success('Utilisateur mis à jour.');
          this.closeUserModal();
          this.submitting.set(false);
        },
        error: (err) => {
          this.notificationService.error('Erreur lors de la mise à jour.');
          this.submitting.set(false);
        }
      });
    } else {
      if (!form.password) {
        this.notificationService.error('Le mot de passe est requis pour un nouvel utilisateur.');
        this.submitting.set(false);
        return;
      }
      if (!form.username) {
        form.username = form.email.split('@')[0] + Math.floor(Math.random() * 1000);
      }
      this.adminService.createUser(form as UserRequest).subscribe({
        next: (newUser) => {
          this.users.update(all => [newUser, ...all]);
          this.notificationService.success('Utilisateur créé avec succès.');
          this.closeUserModal();
          this.submitting.set(false);
        },
        error: (err) => {
          this.notificationService.error('Erreur lors de la création.');
          this.submitting.set(false);
        }
      });
    }
  }

  // Delete Management
  confirmDelete(user: User, event?: Event): void {
    if (event) event.stopPropagation();
    this.selectedUserForDelete.set(user);
    this.showDeleteConfirm.set(true);
  }

  cancelDelete(): void {
    this.selectedUserForDelete.set(null);
    this.showDeleteConfirm.set(false);
  }

  deleteUser(): void {
    const user = this.selectedUserForDelete();
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

  // Drawer Management
  openDrawer(user: User): void {
    this.selectedUserForDrawer.set(user);
    this.activeDrawerTab.set('profil');
    this.isDrawerOpen.set(true);
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
  }

  closeDrawer(): void {
    this.isDrawerOpen.set(false);
    setTimeout(() => {
      this.selectedUserForDrawer.set(null);
    }, 300); // Wait for animation
    document.body.style.overflow = '';
  }

  setDrawerTab(tab: 'profil' | 'resultats' | 'formations' | 'prediction' | 'activite'): void {
    this.activeDrawerTab.set(tab);
  }

  // Bulk Actions
  toggleAllSelection(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      const allIds = this.filteredUsers().map(u => u.id);
      this.selectedUserIds.set(new Set(allIds));
    } else {
      this.selectedUserIds.set(new Set());
    }
  }

  toggleSelection(userId: string): void {
    const current = new Set(this.selectedUserIds());
    if (current.has(userId)) {
      current.delete(userId);
    } else {
      current.add(userId);
    }
    this.selectedUserIds.set(current);
  }

  isAllSelected(): boolean {
    return this.filteredUsers().length > 0 && this.selectedUserIds().size === this.filteredUsers().length;
  }

  exportData(): void {
    this.notificationService.success('Export en cours de génération...');
    // Mock export logic
  }

  bulkAction(action: string): void {
    const count = this.selectedUserIds().size;
    this.notificationService.success(`Action "${action}" exécutée sur ${count} utilisateurs.`);
    this.selectedUserIds.set(new Set()); // clear selection
  }

  // Filters from Stats Bar
  filterFromStats(type: string): void {
    // Reset all
    this.filterStatut.set('');
    this.filterRisque.set('');
    this.filterTest.set('');
    this.filterDepartement.set('');

    switch(type) {
      case 'actifs': this.filterStatut.set('Actif'); break;
      case 'onboarding': this.filterStatut.set('Onboarding'); break;
      case 'arisque': this.filterRisque.set('a-risque'); break;
      case 'sanstest': this.filterTest.set('sans-test'); break;
      case 'sansdept': this.filterDepartement.set('—'); break;
    }
  }

  // Quick Action Mocks
  sendReminder(): void {
    this.notificationService.success('Relance envoyée avec succès.');
  }

  assignFormation(): void {
    this.notificationService.success('Formation assignée avec succès.');
  }
}

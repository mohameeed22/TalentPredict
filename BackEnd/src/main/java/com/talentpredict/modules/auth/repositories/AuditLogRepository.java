package com.talentpredict.modules.auth.repositories;

import com.talentpredict.modules.auth.entities.AuditLog;
import com.talentpredict.modules.user.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, UUID> {
    List<AuditLog> findByUserOrderByCreatedAtDesc(User user);

    @Query("SELECT al FROM AuditLog al WHERE al.user = :user AND al.eventType IN ('LOGIN', 'LOGOUT') ORDER BY al.createdAt DESC LIMIT 10")
    List<AuditLog> findRecentLoginsByUser(@Param("user") User user);

    @Query("SELECT al FROM AuditLog al WHERE al.eventType = 'LOGIN_FAILED' AND al.ipAddress = :ipAddress AND al.createdAt > :since")
    List<AuditLog> findFailedLoginsFromIp(@Param("ipAddress") String ipAddress, @Param("since") Instant since);
}

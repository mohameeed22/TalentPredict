package com.talentpredict.modules.auth.repositories;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.talentpredict.modules.auth.entities.TwoFactorCode;
import com.talentpredict.modules.user.entities.User;

@Repository
public interface TwoFactorCodeRepository extends JpaRepository<TwoFactorCode, UUID> {

    Optional<TwoFactorCode> findTopByUserAndPurposeAndUsedFalseOrderByCreatedAtDesc(
            User user,
            TwoFactorCode.Purpose purpose);

    @Modifying
    @Query("UPDATE TwoFactorCode c SET c.used = true WHERE c.user = :user AND c.purpose = :purpose AND c.used = false")
    void markUsedByUserAndPurpose(@Param("user") User user, @Param("purpose") TwoFactorCode.Purpose purpose);

    @Modifying
    @Query("DELETE FROM TwoFactorCode c WHERE c.expiresAt < :threshold OR c.used = true")
    void cleanupExpiredOrUsed(@Param("threshold") LocalDateTime threshold);
}

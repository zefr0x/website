/**
 * Generated by orval 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import type { QualityModerationType } from "./qualityModerationType"
import type { QualityModerationResponseReviewRequestedAt } from "./qualityModerationResponseReviewRequestedAt"

export interface QualityModerationResponse {
  guidelines: QualityModerationType[]
  is_fullscreen_app: boolean
  review_requested_at?: QualityModerationResponseReviewRequestedAt
}

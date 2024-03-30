/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import type {
  DeleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete200,
  FailedByGuideline,
  QualityModerationDashboardResponse,
  QualityModerationResponse,
  QualityModerationStatus,
  RequestReviewForAppQualityModerationAppIdRequestReviewPost200,
  SetFullscreenAppQualityModerationAppIdFullscreenPost200,
  SetQualityModerationForAppQualityModerationAppIdPost200,
} from ".././model"

export const getGetQualityModerationStatusQualityModerationStatusGetResponseMock =
  (overrideResponse: any = {}): QualityModerationDashboardResponse => ({
    apps: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      appstream: faker.helpers.arrayElement([
        faker.helpers.arrayElement([{}, {}]),
        undefined,
      ]),
      id: faker.word.sample(),
      installs_last_7_days: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          faker.number.int({ min: undefined, max: undefined }),
          {},
        ]),
        undefined,
      ]),
      quality_moderation_status: {
        last_updated: faker.helpers.arrayElement([
          `${faker.date.past().toISOString().split(".")[0]}Z`,
          {},
        ]),
        not_passed: faker.number.int({ min: undefined, max: undefined }),
        passed: faker.number.int({ min: undefined, max: undefined }),
        passes: faker.datatype.boolean(),
        review_requested_at: faker.helpers.arrayElement([
          faker.helpers.arrayElement([
            `${faker.date.past().toISOString().split(".")[0]}Z`,
            {},
          ]),
          undefined,
        ]),
        unrated: faker.number.int({ min: undefined, max: undefined }),
        ...overrideResponse,
      },
      ...overrideResponse,
    })),
    pagination: {
      page: faker.number.int({ min: undefined, max: undefined }),
      page_size: faker.number.int({ min: undefined, max: undefined }),
      total: faker.number.int({ min: undefined, max: undefined }),
      total_pages: faker.number.int({ min: undefined, max: undefined }),
      ...overrideResponse,
    },
    ...overrideResponse,
  })

export const getGetQualityModerationStatsQualityModerationFailedByGuidelineGetResponseMock =
  (overrideResponse: any = {}): FailedByGuideline[] =>
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      guideline_id: faker.word.sample(),
      not_passed: faker.number.int({ min: undefined, max: undefined }),
      ...overrideResponse,
    }))

export const getGetQualityModerationForAppQualityModerationAppIdGetResponseMock =
  (overrideResponse: any = {}): QualityModerationResponse => ({
    guidelines: Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      app_id: faker.word.sample(),
      comment: faker.helpers.arrayElement([faker.word.sample(), {}]),
      guideline: {
        category: faker.word.sample(),
        id: faker.word.sample(),
        needed_to_pass_since: `${faker.date.past().toISOString().split(".")[0]}Z`,
        read_only: faker.helpers.arrayElement([
          faker.datatype.boolean(),
          undefined,
        ]),
        url: faker.word.sample(),
        ...overrideResponse,
      },
      guideline_id: faker.word.sample(),
      needed_to_pass_since: `${faker.date.past().toISOString().split(".")[0]}Z`,
      passed: faker.helpers.arrayElement([faker.datatype.boolean(), {}]),
      updated_at: `${faker.date.past().toISOString().split(".")[0]}Z`,
      updated_by: faker.helpers.arrayElement([
        faker.number.int({ min: undefined, max: undefined }),
        {},
      ]),
      ...overrideResponse,
    })),
    is_fullscreen_app: faker.datatype.boolean(),
    review_requested_at: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split(".")[0]}Z`,
        {},
      ]),
      undefined,
    ]),
    ...overrideResponse,
  })

export const getSetQualityModerationForAppQualityModerationAppIdPostResponseMock =
  (): SetQualityModerationForAppQualityModerationAppIdPost200 => ({})

export const getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetResponseMock =
  (overrideResponse: any = {}): QualityModerationStatus => ({
    last_updated: faker.helpers.arrayElement([
      `${faker.date.past().toISOString().split(".")[0]}Z`,
      {},
    ]),
    not_passed: faker.number.int({ min: undefined, max: undefined }),
    passed: faker.number.int({ min: undefined, max: undefined }),
    passes: faker.datatype.boolean(),
    review_requested_at: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        `${faker.date.past().toISOString().split(".")[0]}Z`,
        {},
      ]),
      undefined,
    ]),
    unrated: faker.number.int({ min: undefined, max: undefined }),
    ...overrideResponse,
  })

export const getRequestReviewForAppQualityModerationAppIdRequestReviewPostResponseMock =
  (): RequestReviewForAppQualityModerationAppIdRequestReviewPost200 => ({})

export const getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteResponseMock =
  (): DeleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete200 => ({})

export const getSetFullscreenAppQualityModerationAppIdFullscreenPostResponseMock =
  (): SetFullscreenAppQualityModerationAppIdFullscreenPost200 => ({})

export const getGetQualityModerationStatusQualityModerationStatusGetMockHandler =
  (overrideResponse?: QualityModerationDashboardResponse) => {
    return http.get("*/quality-moderation/status", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getGetQualityModerationStatusQualityModerationStatusGetResponseMock(),
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    })
  }

export const getGetQualityModerationStatsQualityModerationFailedByGuidelineGetMockHandler =
  (overrideResponse?: FailedByGuideline[]) => {
    return http.get("*/quality-moderation/failed-by-guideline", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getGetQualityModerationStatsQualityModerationFailedByGuidelineGetResponseMock(),
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    })
  }

export const getGetQualityModerationForAppQualityModerationAppIdGetMockHandler =
  (overrideResponse?: QualityModerationResponse) => {
    return http.get("*/quality-moderation/:appId", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getGetQualityModerationForAppQualityModerationAppIdGetResponseMock(),
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    })
  }

export const getSetQualityModerationForAppQualityModerationAppIdPostMockHandler =
  (
    overrideResponse?: SetQualityModerationForAppQualityModerationAppIdPost200,
  ) => {
    return http.post("*/quality-moderation/:appId", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getSetQualityModerationForAppQualityModerationAppIdPostResponseMock(),
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    })
  }

export const getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetMockHandler =
  (overrideResponse?: QualityModerationStatus) => {
    return http.get("*/quality-moderation/:appId/status", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetResponseMock(),
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    })
  }

export const getRequestReviewForAppQualityModerationAppIdRequestReviewPostMockHandler =
  (
    overrideResponse?: RequestReviewForAppQualityModerationAppIdRequestReviewPost200,
  ) => {
    return http.post("*/quality-moderation/:appId/request-review", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getRequestReviewForAppQualityModerationAppIdRequestReviewPostResponseMock(),
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    })
  }

export const getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMockHandler =
  (
    overrideResponse?: DeleteReviewRequestForAppQualityModerationAppIdRequestReviewDelete200,
  ) => {
    return http.delete(
      "*/quality-moderation/:appId/request-review",
      async () => {
        await delay(1000)
        return new HttpResponse(
          JSON.stringify(
            overrideResponse
              ? overrideResponse
              : getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteResponseMock(),
          ),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
      },
    )
  }

export const getSetFullscreenAppQualityModerationAppIdFullscreenPostMockHandler =
  (
    overrideResponse?: SetFullscreenAppQualityModerationAppIdFullscreenPost200,
  ) => {
    return http.post("*/quality-moderation/:appId/fullscreen", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getSetFullscreenAppQualityModerationAppIdFullscreenPostResponseMock(),
        ),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
    })
  }
export const getQualityModerationMock = () => [
  getGetQualityModerationStatusQualityModerationStatusGetMockHandler(),
  getGetQualityModerationStatsQualityModerationFailedByGuidelineGetMockHandler(),
  getGetQualityModerationForAppQualityModerationAppIdGetMockHandler(),
  getSetQualityModerationForAppQualityModerationAppIdPostMockHandler(),
  getGetQualityModerationStatusForAppQualityModerationAppIdStatusGetMockHandler(),
  getRequestReviewForAppQualityModerationAppIdRequestReviewPostMockHandler(),
  getDeleteReviewRequestForAppQualityModerationAppIdRequestReviewDeleteMockHandler(),
  getSetFullscreenAppQualityModerationAppIdFullscreenPostMockHandler(),
]
/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { HttpResponse, delay, http } from "msw"
import type {
  GetNewAppsFeedFeedNewGet200,
  GetNewAppsFeedPostgresFeedNewPostgresGet200,
  GetRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet200,
  GetRecentlyUpdatedAppsFeedPostgresFeedRecentlyUpdatedPostgresGet200,
} from ".././model"

export const getGetRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGetResponseMock =
  (): GetRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet200 => ({})

export const getGetNewAppsFeedFeedNewGetResponseMock =
  (): GetNewAppsFeedFeedNewGet200 => ({})

export const getGetRecentlyUpdatedAppsFeedPostgresFeedRecentlyUpdatedPostgresGetResponseMock =
  (): GetRecentlyUpdatedAppsFeedPostgresFeedRecentlyUpdatedPostgresGet200 => ({})

export const getGetNewAppsFeedPostgresFeedNewPostgresGetResponseMock =
  (): GetNewAppsFeedPostgresFeedNewPostgresGet200 => ({})

export const getGetRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGetMockHandler = (
  overrideResponse?: GetRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGet200,
) => {
  return http.get("*/feed/recently-updated", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGetResponseMock(),
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

export const getGetNewAppsFeedFeedNewGetMockHandler = (
  overrideResponse?: GetNewAppsFeedFeedNewGet200,
) => {
  return http.get("*/feed/new", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetNewAppsFeedFeedNewGetResponseMock(),
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

export const getGetRecentlyUpdatedAppsFeedPostgresFeedRecentlyUpdatedPostgresGetMockHandler =
  (
    overrideResponse?: GetRecentlyUpdatedAppsFeedPostgresFeedRecentlyUpdatedPostgresGet200,
  ) => {
    return http.get("*/feed/recently-updated-postgres", async () => {
      await delay(1000)
      return new HttpResponse(
        JSON.stringify(
          overrideResponse
            ? overrideResponse
            : getGetRecentlyUpdatedAppsFeedPostgresFeedRecentlyUpdatedPostgresGetResponseMock(),
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

export const getGetNewAppsFeedPostgresFeedNewPostgresGetMockHandler = (
  overrideResponse?: GetNewAppsFeedPostgresFeedNewPostgresGet200,
) => {
  return http.get("*/feed/new-postgres", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetNewAppsFeedPostgresFeedNewPostgresGetResponseMock(),
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
export const getFeedMock = () => [
  getGetRecentlyUpdatedAppsFeedFeedRecentlyUpdatedGetMockHandler(),
  getGetNewAppsFeedFeedNewGetMockHandler(),
  getGetRecentlyUpdatedAppsFeedPostgresFeedRecentlyUpdatedPostgresGetMockHandler(),
  getGetNewAppsFeedPostgresFeedNewPostgresGetMockHandler(),
]

/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * Flathub API
 * OpenAPI spec version: 0.1.0
 */
import { faker } from "@faker-js/faker"
import { HttpResponse, delay, http } from "msw"
import type {
  RedemptionResult,
  TokenCancellation,
  TokenList,
  TokenModel,
  VendingApplicationInformation,
  VendingConfig,
  VendingOutput,
  VendingRedirect,
  VendingSetup,
  VendingStatus,
} from ".././model"

export const getStatusVendingStatusGetResponseMock = (
  overrideResponse: any = {},
): VendingStatus => ({
  can_take_payments: faker.datatype.boolean(),
  details_submitted: faker.datatype.boolean(),
  needs_attention: faker.datatype.boolean(),
  status: faker.word.sample(),
  ...overrideResponse,
})

export const getStartOnboardingVendingStatusOnboardingPostResponseMock = (
  overrideResponse: any = {},
): VendingRedirect => ({
  status: faker.word.sample(),
  target_url: faker.word.sample(),
  ...overrideResponse,
})

export const getGetDashboardLinkVendingStatusDashboardlinkGetResponseMock = (
  overrideResponse: any = {},
): VendingRedirect => ({
  status: faker.word.sample(),
  target_url: faker.word.sample(),
  ...overrideResponse,
})

export const getGetGlobalVendingConfigVendingConfigGetResponseMock = (
  overrideResponse: any = {},
): VendingConfig => ({
  fee_cost_percent: faker.number.int({ min: undefined, max: undefined }),
  fee_fixed_cost: faker.number.int({ min: undefined, max: undefined }),
  fee_prefer_percent: faker.number.int({ min: undefined, max: undefined }),
  platforms: {
    [faker.string.alphanumeric(5)]: {
      aliases: Array.from(
        { length: faker.number.int({ min: 1, max: 10 }) },
        (_, i) => i + 1,
      ).map(() => faker.word.sample()),
      depends: faker.helpers.arrayElement([
        faker.helpers.arrayElement([faker.word.sample(), {}]),
        undefined,
      ]),
      keep: faker.number.int({ min: undefined, max: undefined }),
      stripe_account: faker.helpers.arrayElement([
        faker.helpers.arrayElement([faker.word.sample(), {}]),
        undefined,
      ]),
      ...overrideResponse,
    },
  },
  status: faker.word.sample(),
  ...overrideResponse,
})

export const getGetAppVendingSetupVendingappAppIdSetupGetResponseMock = (
  overrideResponse: any = {},
): VendingSetup => ({
  appshare: faker.number.int({ min: undefined, max: undefined }),
  currency: faker.word.sample(),
  minimum_payment: faker.number.int({ min: undefined, max: undefined }),
  recommended_donation: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
})

export const getPostAppVendingSetupVendingappAppIdSetupPostResponseMock = (
  overrideResponse: any = {},
): VendingSetup => ({
  appshare: faker.number.int({ min: undefined, max: undefined }),
  currency: faker.word.sample(),
  minimum_payment: faker.number.int({ min: undefined, max: undefined }),
  recommended_donation: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
})

export const getPostAppVendingStatusVendingappAppIdPostResponseMock = (
  overrideResponse: any = {},
): VendingOutput => ({
  status: faker.word.sample(),
  transaction: faker.word.sample(),
  ...overrideResponse,
})

export const getGetRedeemableTokensVendingappAppIdTokensGetResponseMock = (
  overrideResponse: any = {},
): TokenList => ({
  status: faker.word.sample(),
  tokens: Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    changed: faker.word.sample(),
    created: faker.word.sample(),
    id: faker.word.sample(),
    name: faker.word.sample(),
    state: faker.word.sample(),
    token: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    ...overrideResponse,
  })),
  total: faker.number.int({ min: undefined, max: undefined }),
  ...overrideResponse,
})

export const getCreateTokensVendingappAppIdTokensPostResponseMock = (
  overrideResponse: any = {},
): TokenModel[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    changed: faker.word.sample(),
    created: faker.word.sample(),
    id: faker.word.sample(),
    name: faker.word.sample(),
    state: faker.word.sample(),
    token: faker.helpers.arrayElement([
      faker.helpers.arrayElement([faker.word.sample(), {}]),
      undefined,
    ]),
    ...overrideResponse,
  }))

export const getCancelTokensVendingappAppIdTokensCancelPostResponseMock = (
  overrideResponse: any = {},
): TokenCancellation[] =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    status: faker.word.sample(),
    token: faker.word.sample(),
    ...overrideResponse,
  }))

export const getRedeemTokenVendingappAppIdTokensRedeemTokenPostResponseMock = (
  overrideResponse: any = {},
): RedemptionResult => ({
  reason: faker.word.sample(),
  status: faker.word.sample(),
  ...overrideResponse,
})

export const getAppInfoVendingappAppIdInfoGetResponseMock = (
  overrideResponse: any = {},
): VendingApplicationInformation => ({
  app_id: faker.word.sample(),
  foss: faker.datatype.boolean(),
  foss_reason: faker.word.sample(),
  kind: faker.helpers.arrayElement([
    "GAME",
    "PRODUCTIVITY",
    "GENERIC",
  ] as const),
  kind_reason: faker.word.sample(),
  ...overrideResponse,
})

export const getStatusVendingStatusGetMockHandler = (
  overrideResponse?: VendingStatus,
) => {
  return http.get("*/vending/status", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getStatusVendingStatusGetResponseMock(),
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

export const getStartOnboardingVendingStatusOnboardingPostMockHandler = (
  overrideResponse?: VendingRedirect,
) => {
  return http.post("*/vending/status/onboarding", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getStartOnboardingVendingStatusOnboardingPostResponseMock(),
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

export const getGetDashboardLinkVendingStatusDashboardlinkGetMockHandler = (
  overrideResponse?: VendingRedirect,
) => {
  return http.get("*/vending/status/dashboardlink", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetDashboardLinkVendingStatusDashboardlinkGetResponseMock(),
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

export const getGetGlobalVendingConfigVendingConfigGetMockHandler = (
  overrideResponse?: VendingConfig,
) => {
  return http.get("*/vending/config", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetGlobalVendingConfigVendingConfigGetResponseMock(),
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

export const getGetAppVendingSetupVendingappAppIdSetupGetMockHandler = (
  overrideResponse?: VendingSetup,
) => {
  return http.get("*/vendingapp/:appId/setup", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetAppVendingSetupVendingappAppIdSetupGetResponseMock(),
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

export const getPostAppVendingSetupVendingappAppIdSetupPostMockHandler = (
  overrideResponse?: VendingSetup,
) => {
  return http.post("*/vendingapp/:appId/setup", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getPostAppVendingSetupVendingappAppIdSetupPostResponseMock(),
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

export const getPostAppVendingStatusVendingappAppIdPostMockHandler = (
  overrideResponse?: VendingOutput,
) => {
  return http.post("*/vendingapp/:appId", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getPostAppVendingStatusVendingappAppIdPostResponseMock(),
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

export const getGetRedeemableTokensVendingappAppIdTokensGetMockHandler = (
  overrideResponse?: TokenList,
) => {
  return http.get("*/vendingapp/:appId/tokens", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getGetRedeemableTokensVendingappAppIdTokensGetResponseMock(),
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

export const getCreateTokensVendingappAppIdTokensPostMockHandler = (
  overrideResponse?: TokenModel[],
) => {
  return http.post("*/vendingapp/:appId/tokens", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getCreateTokensVendingappAppIdTokensPostResponseMock(),
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

export const getCancelTokensVendingappAppIdTokensCancelPostMockHandler = (
  overrideResponse?: TokenCancellation[],
) => {
  return http.post("*/vendingapp/:appId/tokens/cancel", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getCancelTokensVendingappAppIdTokensCancelPostResponseMock(),
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

export const getRedeemTokenVendingappAppIdTokensRedeemTokenPostMockHandler = (
  overrideResponse?: RedemptionResult,
) => {
  return http.post("*/vendingapp/:appId/tokens/redeem/:token", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getRedeemTokenVendingappAppIdTokensRedeemTokenPostResponseMock(),
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

export const getAppInfoVendingappAppIdInfoGetMockHandler = (
  overrideResponse?: VendingApplicationInformation,
) => {
  return http.get("*/vendingapp/:appId/info", async () => {
    await delay(1000)
    return new HttpResponse(
      JSON.stringify(
        overrideResponse
          ? overrideResponse
          : getAppInfoVendingappAppIdInfoGetResponseMock(),
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
export const getVendingMock = () => [
  getStatusVendingStatusGetMockHandler(),
  getStartOnboardingVendingStatusOnboardingPostMockHandler(),
  getGetDashboardLinkVendingStatusDashboardlinkGetMockHandler(),
  getGetGlobalVendingConfigVendingConfigGetMockHandler(),
  getGetAppVendingSetupVendingappAppIdSetupGetMockHandler(),
  getPostAppVendingSetupVendingappAppIdSetupPostMockHandler(),
  getPostAppVendingStatusVendingappAppIdPostMockHandler(),
  getGetRedeemableTokensVendingappAppIdTokensGetMockHandler(),
  getCreateTokensVendingappAppIdTokensPostMockHandler(),
  getCancelTokensVendingappAppIdTokensCancelPostMockHandler(),
  getRedeemTokenVendingappAppIdTokensRedeemTokenPostMockHandler(),
  getAppInfoVendingappAppIdInfoGetMockHandler(),
]
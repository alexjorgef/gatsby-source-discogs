import { test, expect } from "@playwright/test"

test.describe(`Kitchen Sink`, () => {
  test(`should build and serve index page`, async ({ page }) => {
    await page.goto(`/`)

    await expect(page).toHaveTitle(`@alexjorgef/gatsby-source-discogs`)
  })
  test(`contains elements`, async ({ page }) => {
    await page.goto(`/`)

    await expect(await page.locator(`h1:has-text("@alexjorgef/gatsby-source-discogs")`)).toBeVisible()
    // await expect(await page.locator(`text=alexjorgef`)).toBeVisible()
    await expect(await page.locator(`text=Linkin Park`)).toBeVisible()
    await expect(await page.locator(`text=Placebo`)).toBeVisible()
    await expect(await page.locator(`text=Prodigy*`)).toBeVisible()
    await expect(await page.locator(`text=Demo of @alexjorgef/gatsby-source-discogs – GitHub – Website`)).toBeVisible()
  })
})

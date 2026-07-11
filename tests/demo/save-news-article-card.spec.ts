import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Unsaving an item from Saved News removes it immediately', { tag: ["@functional","@regression","@P0","@unsave-from-saved-news-removes-immediately"] }, async ({ page, ukgcommonsPage, savedNewsPage }) => {
  await test.step('Open — Navigate to Commons QA', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Home feed is visible', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Scroll — Target article card with title', async () => {
    await ukgcommonsPage.scrollTakeTheNextStepIntoView();
  });

  await test.step('Click — Ensure article is saved: tap bookmark on target card', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Saved badge appears on the card', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Click — Open profile/avatar menu', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step('Click — Go to My saved news', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Saved news list', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Saved article present before unsave', async () => {
    await savedNewsPage.expectTakeTheNextStepVisible();
  });

  await test.step('Click — Unsave the item from Saved News list', async () => {
    await savedNewsPage.clickUnsaveNews();
  });

  await test.step('Assert hidden — Saved article disappears immediately from list', async () => {
    await savedNewsPage.expectTakeTheNextStepHidden();
  });

  await test.step('Click — Navigate back to Home (via logo or home link)', async () => {
    await ukgcommonsPage.clickHeaderBg();
  });

  await test.step('Assert visible — Home feed is visible after returning', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Scroll — Target article card on Home', async () => {
    await ukgcommonsPage.scrollTakeTheNextStepIntoView();
  });

  await test.step('Assert hidden — Saved badge no longer present on target card', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyHidden();
  });
});

test("Access 'My saved news' from profile and open a saved article", { tag: ["@functional","@regression","@P0","@my-saved-news-access-and-open-article"] }, async ({ page, ukgcommonsPage, savedNewsPage, takeTheNextStepInYourDevelopmentAtUkgPage }) => {
  const articleTitle = testData.archivedDeletedArticleIsAutomaticallyRemovedFromSavedNews.enterArticleTitleToArchive;

  await test.step('Open — Navigate to Commons QA', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Home feed is visible', async () => {
    await ukgcommonsPage.expectFeaturedVisible();
  });

  await test.step('Scroll — Target article card with title', async () => {
    await ukgcommonsPage.scrollTakeTheNextStepIntoView();
  });

  await test.step('Click — Save the target article via bookmark icon', async () => {
    await ukgcommonsPage.clickSaveNews();
  });

  await test.step('Assert visible — Saved badge appears on the card', async () => {
    await ukgcommonsPage.expectNewsSavedSuccessfullyVisible();
  });

  await test.step('Click — Open profile/avatar menu', async () => {
    await ukgcommonsPage.clickUserProfile();
  });

  await test.step('Click — Go to My saved news', async () => {
    await ukgcommonsPage.clickMySavedNews();
  });

  await test.step('Assert visible — Saved news list is visible', async () => {
    await savedNewsPage.expectMySavedNewsVisible();
  });

  await test.step('Assert visible — Saved article appears in list', async () => {
    await savedNewsPage.expectTakeTheNextStepVisible();
  });

  await test.step('Click — Open the saved article from list', async () => {
    await savedNewsPage.clickTakeTheNextStepLink();
  });

  await test.step('Assert visible — Article detail page title', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectGetStartedTodayVisible();
  });

  await test.step('Assert text — Article detail title matches', async () => {
    await takeTheNextStepInYourDevelopmentAtUkgPage.expectPageTitle(articleTitle);
  });
});

// Archived from tests/demo/save-news-article-card.spec.ts (test case save-from-featured-open-via-saved)
import { test, expect } from '@support/fixtures';

test('Save article from Featured, verify Saved state, find in \'My saved news\', and open full article', { tag: ["@e2e","@regression","@P0","@save-from-featured-open-via-saved","@req-72e65a65-bcce-4f10-ba6b-fedeebd56b66"] }, async ({ page, ukgcommonsPage, savedNewsPage, commonPage }) => {
  await test.step('Navigate to URL — Open Commons QA Home', async () => {
    await page.goto('https://commons-qa.util.ukg.com/');
  });
  await test.step('Wait until visible — Featured section visible — (section[aria-label=\'Featured\'])', async () => {
    await ukgcommonsPage.expectFeaturedNewsTitleVisible();
  });
  await test.step('Assert visible — Target article card in Featured is visible — (section[aria-label=\'Featured\'] [data-testid=\'news-card\'] ', async () => {
    await ukgcommonsPage.expectTakeTheNextStepInYourDevVisible('Take the next step in your development at UKG');
  });
  await test.step('Click — Tap bookmark icon on the target article card (Featured) — (section[aria-label=\'Featured\'] [data-testid=\'news-car', async () => {
    await ukgcommonsPage.clickAiSaveNews();
  });
  await test.step('Wait until visible — Saved state indicator on the card is visible — (section[aria-label=\'Featured\'] [data-testid=\'news-c', async () => {
    await savedNewsPage.expectTakeTheNextStepLinkVisible();
  });
  await test.step('Click — Open profile/avatar menu — ([data-testid=\'profile-avatar\'])', async () => {
    await commonPage.clickOpenProfileAvatarMenu();
  });
  await test.step('Click — Open \'My saved news\' from profile menu — (a[role=\'menuitem\']:has-text(\'My saved news\'))', async () => {
    await savedNewsPage.clickMySavedNews();
  });
  await test.step('Wait until visible — \'My saved news\' page heading visible — (main h1, [data-testid=\'saved-news-heading\'])', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevAiVisible();
  });
  await test.step('Assert visible — Saved item with target title appears in list — ([data-testid=\'saved-news-item\'] a[role=\'link\'])', async () => {
    await commonPage.expectSavedItemWithTargetTitleAppearsInListVisible('Take the next step in your development at UKG');
  });
  await test.step('Click — Open the saved item — ([data-testid=\'saved-news-item\']:has-text(\'Take the next step in your development at UKG\')', async () => {
    await savedNewsPage.clickTakeTheNextStepLink();
  });
  await test.step('Wait until visible — Article detail page title visible — (article h1, [data-testid=\'article-title\'])', async () => {
    await savedNewsPage.expectTakeTheNextStepInYourDevAiVisible();
  });
  await test.step('Assert text (exact) — Article title matches — (article h1, [data-testid=\'article-title\'])', async () => {
    await commonPage.expectArticleTitleMatchesText('Take the next step in your development at UKG');
  });
  await test.step('Browser back — Navigate back to \'My saved news\' list', async () => {
    await page.goBack();
  });
  await test.step('Click — Unsave the article from Saved News list (cleanup) — ([data-testid=\'saved-news-item\']:has-text(\'Take the next ste', async () => {
    await savedNewsPage.clickTakeTheNextStepLink();
  });
  await test.step('Wait until hidden — Saved item disappears from list after unsave — ([data-testid=\'saved-news-item\']:has-text(\'Take the n', async () => {
    await savedNewsPage.expectTakeTheNextStepLinkHidden();
  });
});

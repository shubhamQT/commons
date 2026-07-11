import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class SavedNewsPage {
  private static readonly L = {
    mySavedNews: { strategy: 'role' as const, value: 'My saved news', role: 'button', actionKind: 'button' as const },
    takeTheNextStepInYourDevLearningAndDevelopment: { strategy: 'role' as const, value: 'Learning and Development', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    takeTheNextStepInYourDevUnsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepLink: { strategy: 'role' as const, value: 'Take the next step in your development at UKG', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    takeTheNextStepInYourDevComment: { strategy: 'altText' as const, value: 'comment', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'generic' as const },
    takeTheNextStepInYourDevShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepInYourDevUkgHomeQa: { strategy: 'role' as const, value: 'UKG Home QA', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    takeTheNextStepInYourDevAi: { strategy: 'role' as const, value: 'AI', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    featuredNewsTitle: { strategy: 'text' as const, value: 'Featured', actionKind: 'generic' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    aiMedia: { strategy: 'css' as const, value: '[class*="FeaturedNews_desktopCardMedia"]', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'generic' as const },
    aiDrakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    aiShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    aiUnsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepInYourDevStacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'text' as const },
    switchToNextNews: { strategy: 'role' as const, value: 'switch to next news', role: 'button', actionKind: 'button' as const },
    latestNews: { strategy: 'role' as const, value: 'Latest news', role: 'heading', level: 3, actionKind: 'text' as const },
    webinarFeaturingUkgCustomer: { strategy: 'altText' as const, value: 'Webinar featuring UKG customer Bay Federal Credit Union', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 1, actionKind: 'generic' as const },
    webinarFeaturingUkgCustomerGtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 1, actionKind: 'link' as const },
    webinarFeaturingUkgCustomerSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 1, actionKind: 'button' as const },
    webinarFeaturingUkgCustomerLink: { strategy: 'role' as const, value: 'Webinar featuring UKG customer Bay Federal Credit', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 1, actionKind: 'link' as const },
    webinarFeaturingUkgCustomerComment: { strategy: 'altText' as const, value: 'comment', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 1, actionKind: 'generic' as const },
    webinarFeaturingUkgCustomerShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 1, actionKind: 'button' as const },
    noSavedNews: { strategy: 'text' as const, value: 'No saved news', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async hoverMySavedNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.mySavedNews), expected, timeoutMs, soft);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.mySavedNews), substring, timeoutMs, soft);
  }

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async clickTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async clickTakeTheNextStepInYourDevLearningAndDevelopmentOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevLearningAndDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async clickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async doubleClickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async hoverTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async clickTakeTheNextStepLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async clickTakeTheNextStepLinkOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs, soft);
  }

  async expectTakeTheNextStepLinkHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs, soft);
  }

  async expectTakeTheNextStepLinkText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepLinkContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async clickTakeTheNextStepInYourDevComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async expectTakeTheNextStepInYourDevCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevCommentHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevCommentEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevCommentDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevCommentText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevCommentContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async clickTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async doubleClickTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async hoverTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async expectTakeTheNextStepInYourDevShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async clickTakeTheNextStepInYourDevUkgHomeQa(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async clickTakeTheNextStepInYourDevUkgHomeQaOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevUkgHomeQaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async clickTakeTheNextStepInYourDevAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async clickTakeTheNextStepInYourDevAiOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async expectTakeTheNextStepInYourDevAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevAiHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevAiText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevAiContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async clickFeaturedNewsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async expectFeaturedNewsTitleText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), expected, timeoutMs, soft);
  }

  async expectFeaturedNewsTitleContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), substring, timeoutMs, soft);
  }

  async scrollFeaturedNewsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async clickSwitchToPreviousNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async doubleClickSwitchToPreviousNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async hoverSwitchToPreviousNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), expected, timeoutMs, soft);
  }

  async expectSwitchToPreviousNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), substring, timeoutMs, soft);
  }

  async scrollSwitchToPreviousNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async clickAiMedia(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async expectAiMediaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs, soft);
  }

  async expectAiMediaText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiMedia), expected, timeoutMs, soft);
  }

  async expectAiMediaContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiMedia), substring, timeoutMs, soft);
  }

  async scrollAiMediaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async getInnerTextAiDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs, soft);
  }

  async expectAiDrakeTiwaryHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs, soft);
  }

  async expectAiDrakeTiwaryText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), expected, timeoutMs, soft);
  }

  async expectAiDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), substring, timeoutMs, soft);
  }

  async scrollAiDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async clickAiShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async doubleClickAiShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async hoverAiShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async expectAiShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs, soft);
  }

  async expectAiShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiShareNews), expected, timeoutMs, soft);
  }

  async expectAiShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiShareNews), substring, timeoutMs, soft);
  }

  async scrollAiShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async clickAiUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews));
  }

  async doubleClickAiUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews));
  }

  async hoverAiUnsaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews));
  }

  async expectAiUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), timeoutMs, soft);
  }

  async expectAiUnsaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), expected, timeoutMs, soft);
  }

  async expectAiUnsaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), substring, timeoutMs, soft);
  }

  async scrollAiUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews));
  }

  async getInnerTextTakeTheNextStepInYourDevStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), expected, timeoutMs, soft);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), substring, timeoutMs, soft);
  }

  async scrollTakeTheNextStepInYourDevStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async clickSwitchToNextNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async doubleClickSwitchToNextNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async hoverSwitchToNextNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async expectSwitchToNextNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), expected, timeoutMs, soft);
  }

  async expectSwitchToNextNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), substring, timeoutMs, soft);
  }

  async scrollSwitchToNextNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async getInnerTextLatestNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async expectLatestNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async expectLatestNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.latestNews), expected, timeoutMs, soft);
  }

  async expectLatestNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.latestNews), substring, timeoutMs, soft);
  }

  async scrollLatestNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async clickWebinarFeaturingUkgCustomer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async expectWebinarFeaturingUkgCustomerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), expected, timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), substring, timeoutMs, soft);
  }

  async scrollWebinarFeaturingUkgCustomerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async clickWebinarFeaturingUkgCustomerGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async clickWebinarFeaturingUkgCustomerGtmMarketingOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), expected, timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), substring, timeoutMs, soft);
  }

  async scrollWebinarFeaturingUkgCustomerGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async clickWebinarFeaturingUkgCustomerSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews));
  }

  async doubleClickWebinarFeaturingUkgCustomerSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews));
  }

  async hoverWebinarFeaturingUkgCustomerSaveNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews));
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), expected, timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), substring, timeoutMs, soft);
  }

  async scrollWebinarFeaturingUkgCustomerSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews));
  }

  async clickWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async clickWebinarFeaturingUkgCustomerLinkOpensNewPage(): Promise<Page> {
    return clickOpensNewPage(this.page, webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async expectWebinarFeaturingUkgCustomerLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerLinkHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerLinkText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), expected, timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerLinkContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), substring, timeoutMs, soft);
  }

  async scrollWebinarFeaturingUkgCustomerLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async clickWebinarFeaturingUkgCustomerComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async expectWebinarFeaturingUkgCustomerCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerCommentHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerCommentEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerCommentDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerCommentText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), expected, timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerCommentContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), substring, timeoutMs, soft);
  }

  async scrollWebinarFeaturingUkgCustomerCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async clickWebinarFeaturingUkgCustomerShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews));
  }

  async doubleClickWebinarFeaturingUkgCustomerShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews));
  }

  async hoverWebinarFeaturingUkgCustomerShareNews(): Promise<void> {
    await hoverWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews));
  }

  async expectWebinarFeaturingUkgCustomerShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsEnabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsDisabled(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), expected, timeoutMs, soft);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), substring, timeoutMs, soft);
  }

  async scrollWebinarFeaturingUkgCustomerShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews));
  }

  async getInnerTextNoSavedNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs, soft);
  }

  async expectNoSavedNewsHidden(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs, soft);
  }

  async expectNoSavedNewsText(expected: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noSavedNews), expected, timeoutMs, soft);
  }

  async expectNoSavedNewsContainsText(substring: string, timeoutMs = 30_000, soft = true): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noSavedNews), substring, timeoutMs, soft);
  }

  async scrollNoSavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }


  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.mySavedNews), count, timeoutMs);
  }

  async doubleClickTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async longPressTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), count, timeoutMs);
  }

  async longPressTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), count, timeoutMs);
  }

  async doubleClickTakeTheNextStepLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async longPressTakeTheNextStepLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), value, timeoutMs);
  }

  async expectTakeTheNextStepLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), count, timeoutMs);
  }

  async doubleClickTakeTheNextStepInYourDevComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async longPressTakeTheNextStepInYourDevComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment));
  }

  async expectTakeTheNextStepInYourDevCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevComment), count, timeoutMs);
  }

  async longPressTakeTheNextStepInYourDevShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews));
  }

  async expectTakeTheNextStepInYourDevShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevShareNews), count, timeoutMs);
  }

  async doubleClickTakeTheNextStepInYourDevUkgHomeQa(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async longPressTakeTheNextStepInYourDevUkgHomeQa(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa));
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUkgHomeQaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUkgHomeQa), count, timeoutMs);
  }

  async doubleClickTakeTheNextStepInYourDevAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async longPressTakeTheNextStepInYourDevAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi));
  }

  async expectTakeTheNextStepInYourDevAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevAi), count, timeoutMs);
  }

  async doubleClickFeaturedNewsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async longPressFeaturedNewsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), value, timeoutMs);
  }

  async expectFeaturedNewsTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), count, timeoutMs);
  }

  async longPressSwitchToPreviousNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), value, timeoutMs);
  }

  async expectSwitchToPreviousNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), count, timeoutMs);
  }

  async doubleClickAiMedia(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async longPressAiMedia(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async expectAiMediaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiMedia), value, timeoutMs);
  }

  async expectAiMediaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiMedia), count, timeoutMs);
  }

  async clickAiDrakeTiwary(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async doubleClickAiDrakeTiwary(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async longPressAiDrakeTiwary(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), value, timeoutMs);
  }

  async expectAiDrakeTiwaryEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), count, timeoutMs);
  }

  async longPressAiShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async expectAiShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiShareNews), value, timeoutMs);
  }

  async expectAiShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiShareNews), count, timeoutMs);
  }

  async longPressAiUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews));
  }

  async expectAiUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), value, timeoutMs);
  }

  async expectAiUnsaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), timeoutMs);
  }

  async expectAiUnsaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiUnsaveNews), count, timeoutMs);
  }

  async clickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async doubleClickTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async longPressTakeTheNextStepInYourDevStacyCutrono(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), count, timeoutMs);
  }

  async longPressSwitchToNextNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToNextNews), value, timeoutMs);
  }

  async expectSwitchToNextNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.switchToNextNews), count, timeoutMs);
  }

  async clickLatestNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async doubleClickLatestNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async longPressLatestNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.latestNews), value, timeoutMs);
  }

  async expectLatestNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.latestNews), count, timeoutMs);
  }

  async doubleClickWebinarFeaturingUkgCustomer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async longPressWebinarFeaturingUkgCustomer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async expectWebinarFeaturingUkgCustomerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), count, timeoutMs);
  }

  async doubleClickWebinarFeaturingUkgCustomerGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async longPressWebinarFeaturingUkgCustomerGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), count, timeoutMs);
  }

  async longPressWebinarFeaturingUkgCustomerSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews));
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerSaveNews), count, timeoutMs);
  }

  async doubleClickWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async longPressWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async expectWebinarFeaturingUkgCustomerLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), count, timeoutMs);
  }

  async doubleClickWebinarFeaturingUkgCustomerComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async longPressWebinarFeaturingUkgCustomerComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async expectWebinarFeaturingUkgCustomerCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), count, timeoutMs);
  }

  async longPressWebinarFeaturingUkgCustomerShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews));
  }

  async expectWebinarFeaturingUkgCustomerShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerShareNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerShareNews), count, timeoutMs);
  }

  async clickNoSavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async doubleClickNoSavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async longPressNoSavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noSavedNews), value, timeoutMs);
  }

  async expectNoSavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noSavedNews), count, timeoutMs);
  }

}

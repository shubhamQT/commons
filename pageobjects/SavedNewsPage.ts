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
    noNews: { strategy: 'altText' as const, value: 'no-news', actionKind: 'generic' as const },
    noSavedNews: { strategy: 'text' as const, value: 'No saved news', actionKind: 'text' as const },
    featuredNewsTitle: { strategy: 'text' as const, value: 'Featured', actionKind: 'generic' as const },
    switchToPreviousNews: { strategy: 'role' as const, value: 'switch to previous news', role: 'button', actionKind: 'button' as const },
    aiMedia: { strategy: 'css' as const, value: '[class*="FeaturedNews_desktopCardMedia"]', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'generic' as const },
    aiTitle: { strategy: 'text' as const, value: 'AI', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    aiDrakeTiwary: { strategy: 'text' as const, value: 'Drake Tiwary', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'text' as const },
    aiShareNews: { strategy: 'role' as const, value: 'Share news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    aiSaveNews: { strategy: 'role' as const, value: 'Save news', role: 'button', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepInYourDev: { strategy: 'altText' as const, value: 'Take the next step in your development at UKG', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'generic' as const },
    takeTheNextStepInYourDevStacyCutrono: { strategy: 'text' as const, value: 'Stacy Cutrono', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'text' as const },
    allEmployeeTownHallJune: { strategy: 'altText' as const, value: 'All-Employee Town Hall - June 2026', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'generic' as const },
    allEmployeeTownHallJuneAshleyAmerson: { strategy: 'text' as const, value: 'Ashley Amerson', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'All-Employee Town Hall - June 2026', scopeIndex: 0, actionKind: 'text' as const },
    celebratingTheStrengthOfTh: { strategy: 'altText' as const, value: 'Celebrating the strength of the UKG Ready partner network', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'generic' as const },
    celebratingTheStrengthOfTitle: { strategy: 'text' as const, value: 'Celebrating the strength of the UKG Ready partner', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'text' as const },
    celebratingTheStrengthOfThChristopherKiklas: { strategy: 'text' as const, value: 'Christopher Kiklas', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating the strength of the UKG Ready partner network', scopeIndex: 0, actionKind: 'text' as const },
    prideMonth2026TogetherWi: { strategy: 'altText' as const, value: 'Pride Month 2026: Together, with pride and love', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Pride Month 2026: Together, with pride and love', scopeIndex: 0, actionKind: 'generic' as const },
    prideMonth2026TogetherWiSequoyaFord: { strategy: 'text' as const, value: 'Sequoya Ford', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Pride Month 2026: Together, with pride and love', scopeIndex: 0, actionKind: 'text' as const },
    globalImpactInAction4Wee: { strategy: 'altText' as const, value: 'Global Impact in Action: 4-Week Challenge winners', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Global Impact in Action: 4-Week Challenge winners', scopeIndex: 0, actionKind: 'generic' as const },
    globalImpactInAction4WeeSarahMarks: { strategy: 'text' as const, value: 'Sarah Marks', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Global Impact in Action: 4-Week Challenge winners', scopeIndex: 0, actionKind: 'text' as const },
    celebratingOneYearOfShiftb: { strategy: 'altText' as const, value: 'Celebrating one year of Shiftboard at UKG', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating one year of Shiftboard at UKG', scopeIndex: 0, actionKind: 'generic' as const },
    celebratingOneYearOfShiftbBrianBower: { strategy: 'text' as const, value: 'Brian Bower', scope: '[class*="FeaturedNews_desktopCard"]', scopeText: 'Celebrating one year of Shiftboard at UKG', scopeIndex: 0, actionKind: 'text' as const },
    switchToNextNews: { strategy: 'role' as const, value: 'switch to next news', role: 'button', actionKind: 'button' as const },
    latestNews: { strategy: 'role' as const, value: 'Latest news', role: 'heading', level: 3, actionKind: 'text' as const },
    seeAll: { strategy: 'role' as const, value: 'See all', role: 'button', actionKind: 'button' as const },
    webinarFeaturingUkgCustomer: { strategy: 'altText' as const, value: 'Webinar featuring UKG customer Bay Federal Credit Union', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 0, actionKind: 'generic' as const },
    webinarFeaturingUkgCustomerGtmMarketing: { strategy: 'role' as const, value: 'GTM: Marketing', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 0, actionKind: 'link' as const },
    webinarFeaturingUkgCustomerLink: { strategy: 'role' as const, value: 'Webinar featuring UKG customer Bay Federal Credit', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 0, actionKind: 'link' as const },
    webinarFeaturingUkgCustomerComment: { strategy: 'altText' as const, value: 'comment', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Webinar featuring UKG customer Bay Federal Credit Union', scopeIndex: 0, actionKind: 'generic' as const },
    theRoleOfHrLink: { strategy: 'role' as const, value: 'The Role of HR in a Shrinking Higher Ed', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'The Role of HR in a Shrinking Higher Ed', scopeIndex: 2, actionKind: 'link' as const },
    julySocialSellingUpdatesLink: { strategy: 'role' as const, value: 'July social selling updates', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'July social selling updates', scopeIndex: 3, actionKind: 'link' as const },
    whatSecuritySeesGoodInten: { strategy: 'altText' as const, value: 'What Security Sees: Good intentions, unexpected risk', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'What Security Sees: Good intentions, unexpected risk', scopeIndex: 4, actionKind: 'generic' as const },
    whatSecuritySeesGoodIntenProductEngineeringGlobal: { strategy: 'role' as const, value: 'Product & Engineering: Global Security', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'What Security Sees: Good intentions, unexpected risk', scopeIndex: 4, actionKind: 'link' as const },
    whatSecuritySeesGoodLink: { strategy: 'role' as const, value: 'What Security Sees: Good intentions, unexpected', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'What Security Sees: Good intentions, unexpected risk', scopeIndex: 4, actionKind: 'link' as const },
    buildNewsletterJuly2026: { strategy: 'altText' as const, value: 'Build Newsletter - July 2026', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Build Newsletter - July 2026', scopeIndex: 5, actionKind: 'generic' as const },
    buildNewsletterJuly2026PeopleUkgBuild: { strategy: 'role' as const, value: 'People: UKG Build', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Build Newsletter - July 2026', scopeIndex: 5, actionKind: 'link' as const },
    policyGovernanceAtUkgBuilLegalRiskCompliance: { strategy: 'role' as const, value: 'Legal: Risk & Compliance', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Policy governance at UKG: Building trust through strong governance', scopeIndex: 6, actionKind: 'link' as const },
    policyGovernanceAtUkgLink: { strategy: 'text' as const, value: 'Policy governance at UKG: Building trust through strong governance', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Policy governance at UKG: Building trust through strong governance', scopeIndex: 6, actionKind: 'link' as const },
    photoOfTheWeekLowellOffiInsideUkg: { strategy: 'role' as const, value: 'Inside UKG', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Photo of the Week: Lowell office spotlight', scopeIndex: 7, actionKind: 'link' as const },
    photoOfTheWeekLink: { strategy: 'role' as const, value: 'Photo of the Week: Lowell office spotlight', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'Photo of the Week: Lowell office spotlight', scopeIndex: 7, actionKind: 'link' as const },
    agencyUAgentAThonMovesIntAiHub: { strategy: 'role' as const, value: 'AI Hub', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'AgencyU Agent-a-thon moves into judging', scopeIndex: 8, actionKind: 'link' as const },
    agencyUAgentAThonMovesIntoLink: { strategy: 'role' as const, value: 'AgencyU Agent-a-thon moves into judging', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'AgencyU Agent-a-thon moves into judging', scopeIndex: 8, actionKind: 'link' as const },
    newForresterTotalEconomicI: { strategy: 'altText' as const, value: 'New Forrester Total Economic Impact™ (TEI) study is live!', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'New Forrester Total Economic Impact™ (TEI) study is live!', scopeIndex: 9, actionKind: 'generic' as const },
    newForresterTotalEconomicLink: { strategy: 'role' as const, value: 'New Forrester Total Economic Impact™ (TEI) study', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'New Forrester Total Economic Impact™ (TEI) study is live!', scopeIndex: 9, actionKind: 'link' as const },
    july2026HealthAwarenessSp: { strategy: 'altText' as const, value: 'July 2026 health awareness: Spotlight on wellness initiatives', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'July 2026 health awareness: Spotlight on wellness initiatives', scopeIndex: 10, actionKind: 'generic' as const },
    july2026HealthAwarenessSpPeopleUkgCares: { strategy: 'role' as const, value: 'People: UKG Cares', role: 'link', scope: '[class*="LatestNewsWidget_smallCard"]', scopeText: 'July 2026 health awareness: Spotlight on wellness initiatives', scopeIndex: 10, actionKind: 'link' as const },
    takeTheNextStepInYourDevLearningAndDevelopment: { strategy: 'role' as const, value: 'Learning and Development', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    takeTheNextStepInYourDevUnsaveNews: { strategy: 'role' as const, value: 'Unsave news', role: 'button', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'button' as const },
    takeTheNextStepLink: { strategy: 'role' as const, value: 'Take the next step in your development at UKG', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'Take the next step in your development at UKG', scopeIndex: 0, actionKind: 'link' as const },
    aiUkgHomeQa: { strategy: 'role' as const, value: 'UKG Home QA', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'link' as const },
    ai: { strategy: 'role' as const, value: 'AI', role: 'link', scope: '[class*="LatestNewsWidget_smallCards"]', scopeText: 'AI', scopeIndex: 0, actionKind: 'link' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickMySavedNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickMySavedNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs, soft);
  }

  async clickNoNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs, soft);
  }

  async getInnerTextNoSavedNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async expectNoSavedNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs, soft);
  }

  async clickFeaturedNewsTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs, soft);
  }

  async clickSwitchToPreviousNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async doubleClickSwitchToPreviousNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs, soft);
  }

  async clickAiMedia(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async expectAiMediaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs, soft);
  }

  async getInnerTextAiTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.aiTitle));
  }

  async expectAiTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiTitle), timeoutMs, soft);
  }

  async getInnerTextAiDrakeTiwary(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async expectAiDrakeTiwaryVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs, soft);
  }

  async clickAiShareNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async doubleClickAiShareNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async expectAiShareNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs, soft);
  }

  async clickAiSaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiSaveNews));
  }

  async doubleClickAiSaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiSaveNews));
  }

  async expectAiSaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiSaveNews), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDev(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev));
  }

  async expectTakeTheNextStepInYourDevVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), timeoutMs, soft);
  }

  async getInnerTextTakeTheNextStepInYourDevStacyCutrono(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async expectTakeTheNextStepInYourDevStacyCutronoVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs, soft);
  }

  async clickAllEmployeeTownHallJune(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs, soft);
  }

  async getInnerTextAllEmployeeTownHallJuneAshleyAmerson(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs, soft);
  }

  async clickCelebratingTheStrengthOfTh(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOfTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs, soft);
  }

  async getInnerTextCelebratingTheStrengthOfThChristopherKiklas(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs, soft);
  }

  async clickPrideMonth2026TogetherWi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi));
  }

  async expectPrideMonth2026TogetherWiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), timeoutMs, soft);
  }

  async getInnerTextPrideMonth2026TogetherWiSequoyaFord(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async expectPrideMonth2026TogetherWiSequoyaFordVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs, soft);
  }

  async clickGlobalImpactInAction4Wee(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee));
  }

  async expectGlobalImpactInAction4WeeVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), timeoutMs, soft);
  }

  async getInnerTextGlobalImpactInAction4WeeSarahMarks(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async expectGlobalImpactInAction4WeeSarahMarksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs, soft);
  }

  async clickCelebratingOneYearOfShiftb(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb));
  }

  async expectCelebratingOneYearOfShiftbVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), timeoutMs, soft);
  }

  async getInnerTextCelebratingOneYearOfShiftbBrianBower(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async expectCelebratingOneYearOfShiftbBrianBowerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs, soft);
  }

  async clickSwitchToNextNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async doubleClickSwitchToNextNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs, soft);
  }

  async getInnerTextLatestNews(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async expectLatestNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs, soft);
  }

  async clickSeeAll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async doubleClickSeeAll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async expectSeeAllVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs, soft);
  }

  async clickWebinarFeaturingUkgCustomer(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async expectWebinarFeaturingUkgCustomerVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs, soft);
  }

  async clickWebinarFeaturingUkgCustomerGtmMarketing(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs, soft);
  }

  async clickWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async expectWebinarFeaturingUkgCustomerLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs, soft);
  }

  async clickWebinarFeaturingUkgCustomerComment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async expectWebinarFeaturingUkgCustomerCommentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs, soft);
  }

  async clickTheRoleOfHrLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async expectTheRoleOfHrLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs, soft);
  }

  async clickJulySocialSellingUpdatesLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async expectJulySocialSellingUpdatesLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs, soft);
  }

  async clickWhatSecuritySeesGoodInten(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten));
  }

  async expectWhatSecuritySeesGoodIntenVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), timeoutMs, soft);
  }

  async clickWhatSecuritySeesGoodIntenProductEngineeringGlobal(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal));
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), timeoutMs, soft);
  }

  async clickWhatSecuritySeesGoodLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async expectWhatSecuritySeesGoodLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs, soft);
  }

  async clickBuildNewsletterJuly2026(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026));
  }

  async expectBuildNewsletterJuly2026Visible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), timeoutMs, soft);
  }

  async clickBuildNewsletterJuly2026PeopleUkgBuild(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild));
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), timeoutMs, soft);
  }

  async clickPolicyGovernanceAtUkgBuilLegalRiskCompliance(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs, soft);
  }

  async clickPolicyGovernanceAtUkgLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async expectPolicyGovernanceAtUkgLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLowellOffiInsideUkg(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs, soft);
  }

  async clickPhotoOfTheWeekLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs, soft);
  }

  async clickAgencyUAgentAThonMovesIntAiHub(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async expectAgencyUAgentAThonMovesIntAiHubVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs, soft);
  }

  async clickAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async expectAgencyUAgentAThonMovesIntoLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs, soft);
  }

  async clickNewForresterTotalEconomicI(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI));
  }

  async expectNewForresterTotalEconomicIVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), timeoutMs, soft);
  }

  async clickNewForresterTotalEconomicLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async expectNewForresterTotalEconomicLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs, soft);
  }

  async clickJuly2026HealthAwarenessSp(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp));
  }

  async expectJuly2026HealthAwarenessSpVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), timeoutMs, soft);
  }

  async clickJuly2026HealthAwarenessSpPeopleUkgCares(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs, soft);
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  /** Assert page title matches an expected string or regex. */
  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, expected, timeoutMs);
  }

  /** Verify we are on the correct page using the title captured at record time. */
  async verifyOnPage(timeoutMs = 30_000): Promise<void> {
    await expectPageTitle(this.page, 'UKG Commons', timeoutMs);
  }

  async clickTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs, soft);
  }

  async clickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async doubleClickTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs, soft);
  }

  async clickTakeTheNextStepLink(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs, soft);
  }

  async clickAiUkgHomeQa(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa));
  }

  async expectAiUkgHomeQaVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), timeoutMs, soft);
  }

  async clickAi(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs, soft);
  }


  async longPressMySavedNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async expectMySavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.mySavedNews), expected, timeoutMs);
  }

  async expectMySavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.mySavedNews), substring, timeoutMs);
  }

  async expectMySavedNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.mySavedNews), value, timeoutMs);
  }

  async expectMySavedNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
  }

  async expectMySavedNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.mySavedNews), timeoutMs);
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

  async scrollMySavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.mySavedNews));
  }

  async doubleClickNoNews(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async longPressNoNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
  }

  async expectNoNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noNews), expected, timeoutMs);
  }

  async expectNoNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noNews), substring, timeoutMs);
  }

  async expectNoNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.noNews), value, timeoutMs);
  }

  async expectNoNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.noNews), timeoutMs);
  }

  async expectNoNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.noNews), count, timeoutMs);
  }

  async scrollNoNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noNews));
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

  async expectNoSavedNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.noSavedNews), timeoutMs);
  }

  async expectNoSavedNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.noSavedNews), expected, timeoutMs);
  }

  async expectNoSavedNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.noSavedNews), substring, timeoutMs);
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

  async scrollNoSavedNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.noSavedNews));
  }

  async doubleClickFeaturedNewsTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async longPressFeaturedNewsTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async expectFeaturedNewsTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), expected, timeoutMs);
  }

  async expectFeaturedNewsTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), substring, timeoutMs);
  }

  async expectFeaturedNewsTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), value, timeoutMs);
  }

  async expectFeaturedNewsTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs);
  }

  async expectFeaturedNewsTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle), timeoutMs);
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

  async scrollFeaturedNewsTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.featuredNewsTitle));
  }

  async longPressSwitchToPreviousNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async expectSwitchToPreviousNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), expected, timeoutMs);
  }

  async expectSwitchToPreviousNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), substring, timeoutMs);
  }

  async expectSwitchToPreviousNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), value, timeoutMs);
  }

  async expectSwitchToPreviousNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
  }

  async expectSwitchToPreviousNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews), timeoutMs);
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

  async scrollSwitchToPreviousNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToPreviousNews));
  }

  async doubleClickAiMedia(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async longPressAiMedia(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async expectAiMediaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiMedia), expected, timeoutMs);
  }

  async expectAiMediaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiMedia), substring, timeoutMs);
  }

  async expectAiMediaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiMedia), value, timeoutMs);
  }

  async expectAiMediaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
  }

  async expectAiMediaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiMedia), timeoutMs);
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

  async scrollAiMediaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiMedia));
  }

  async clickAiTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiTitle));
  }

  async doubleClickAiTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiTitle));
  }

  async longPressAiTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiTitle));
  }

  async expectAiTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiTitle), expected, timeoutMs);
  }

  async expectAiTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiTitle), substring, timeoutMs);
  }

  async expectAiTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiTitle), value, timeoutMs);
  }

  async expectAiTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiTitle), timeoutMs);
  }

  async expectAiTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiTitle), count, timeoutMs);
  }

  async scrollAiTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiTitle));
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

  async expectAiDrakeTiwaryHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), timeoutMs);
  }

  async expectAiDrakeTiwaryText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), expected, timeoutMs);
  }

  async expectAiDrakeTiwaryContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary), substring, timeoutMs);
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

  async scrollAiDrakeTiwaryIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiDrakeTiwary));
  }

  async longPressAiShareNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async expectAiShareNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiShareNews), expected, timeoutMs);
  }

  async expectAiShareNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiShareNews), substring, timeoutMs);
  }

  async expectAiShareNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiShareNews), value, timeoutMs);
  }

  async expectAiShareNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs);
  }

  async expectAiShareNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiShareNews), timeoutMs);
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

  async scrollAiShareNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiShareNews));
  }

  async longPressAiSaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiSaveNews));
  }

  async expectAiSaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiSaveNews), expected, timeoutMs);
  }

  async expectAiSaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiSaveNews), substring, timeoutMs);
  }

  async expectAiSaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiSaveNews), value, timeoutMs);
  }

  async expectAiSaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiSaveNews), timeoutMs);
  }

  async expectAiSaveNewsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiSaveNews), count, timeoutMs);
  }

  async scrollAiSaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiSaveNews));
  }

  async doubleClickTakeTheNextStepInYourDev(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev));
  }

  async longPressTakeTheNextStepInYourDev(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev));
  }

  async expectTakeTheNextStepInYourDevHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev), count, timeoutMs);
  }

  async scrollTakeTheNextStepInYourDevIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDev));
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

  async expectTakeTheNextStepInYourDevStacyCutronoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevStacyCutronoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono), substring, timeoutMs);
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

  async scrollTakeTheNextStepInYourDevStacyCutronoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevStacyCutrono));
  }

  async doubleClickAllEmployeeTownHallJune(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async longPressAllEmployeeTownHallJune(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async expectAllEmployeeTownHallJuneHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallJuneIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJune));
  }

  async clickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async doubleClickAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async longPressAllEmployeeTownHallJuneAshleyAmerson(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), expected, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), substring, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), value, timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), timeoutMs);
  }

  async expectAllEmployeeTownHallJuneAshleyAmersonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson), count, timeoutMs);
  }

  async scrollAllEmployeeTownHallJuneAshleyAmersonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.allEmployeeTownHallJuneAshleyAmerson));
  }

  async doubleClickCelebratingTheStrengthOfTh(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async longPressCelebratingTheStrengthOfTh(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async expectCelebratingTheStrengthOfThHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfThIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTh));
  }

  async clickCelebratingTheStrengthOfTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async doubleClickCelebratingTheStrengthOfTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async longPressCelebratingTheStrengthOfTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async expectCelebratingTheStrengthOfTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), timeoutMs);
  }

  async expectCelebratingTheStrengthOfTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfTitle));
  }

  async clickCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async doubleClickCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async longPressCelebratingTheStrengthOfThChristopherKiklas(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), expected, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), substring, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), value, timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), timeoutMs);
  }

  async expectCelebratingTheStrengthOfThChristopherKiklasCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas), count, timeoutMs);
  }

  async scrollCelebratingTheStrengthOfThChristopherKiklasIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingTheStrengthOfThChristopherKiklas));
  }

  async doubleClickPrideMonth2026TogetherWi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi));
  }

  async longPressPrideMonth2026TogetherWi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi));
  }

  async expectPrideMonth2026TogetherWiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), expected, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), substring, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), value, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi), count, timeoutMs);
  }

  async scrollPrideMonth2026TogetherWiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWi));
  }

  async clickPrideMonth2026TogetherWiSequoyaFord(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async doubleClickPrideMonth2026TogetherWiSequoyaFord(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async longPressPrideMonth2026TogetherWiSequoyaFord(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async expectPrideMonth2026TogetherWiSequoyaFordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), expected, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), substring, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), value, timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), timeoutMs);
  }

  async expectPrideMonth2026TogetherWiSequoyaFordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord), count, timeoutMs);
  }

  async scrollPrideMonth2026TogetherWiSequoyaFordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.prideMonth2026TogetherWiSequoyaFord));
  }

  async doubleClickGlobalImpactInAction4Wee(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee));
  }

  async longPressGlobalImpactInAction4Wee(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee));
  }

  async expectGlobalImpactInAction4WeeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), expected, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), substring, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), value, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee), count, timeoutMs);
  }

  async scrollGlobalImpactInAction4WeeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4Wee));
  }

  async clickGlobalImpactInAction4WeeSarahMarks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async doubleClickGlobalImpactInAction4WeeSarahMarks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async longPressGlobalImpactInAction4WeeSarahMarks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async expectGlobalImpactInAction4WeeSarahMarksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), expected, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), substring, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), value, timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), timeoutMs);
  }

  async expectGlobalImpactInAction4WeeSarahMarksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks), count, timeoutMs);
  }

  async scrollGlobalImpactInAction4WeeSarahMarksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.globalImpactInAction4WeeSarahMarks));
  }

  async doubleClickCelebratingOneYearOfShiftb(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb));
  }

  async longPressCelebratingOneYearOfShiftb(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb));
  }

  async expectCelebratingOneYearOfShiftbHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), expected, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), substring, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), value, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb), count, timeoutMs);
  }

  async scrollCelebratingOneYearOfShiftbIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftb));
  }

  async clickCelebratingOneYearOfShiftbBrianBower(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async doubleClickCelebratingOneYearOfShiftbBrianBower(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async longPressCelebratingOneYearOfShiftbBrianBower(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async expectCelebratingOneYearOfShiftbBrianBowerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), expected, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), substring, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), value, timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), timeoutMs);
  }

  async expectCelebratingOneYearOfShiftbBrianBowerCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower), count, timeoutMs);
  }

  async scrollCelebratingOneYearOfShiftbBrianBowerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.celebratingOneYearOfShiftbBrianBower));
  }

  async longPressSwitchToNextNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
  }

  async expectSwitchToNextNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), expected, timeoutMs);
  }

  async expectSwitchToNextNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.switchToNextNews), substring, timeoutMs);
  }

  async expectSwitchToNextNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.switchToNextNews), value, timeoutMs);
  }

  async expectSwitchToNextNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
  }

  async expectSwitchToNextNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.switchToNextNews), timeoutMs);
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

  async scrollSwitchToNextNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.switchToNextNews));
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

  async expectLatestNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.latestNews), timeoutMs);
  }

  async expectLatestNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.latestNews), expected, timeoutMs);
  }

  async expectLatestNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.latestNews), substring, timeoutMs);
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

  async scrollLatestNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.latestNews));
  }

  async longPressSeeAll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async expectSeeAllHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.seeAll), expected, timeoutMs);
  }

  async expectSeeAllContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.seeAll), substring, timeoutMs);
  }

  async expectSeeAllValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.seeAll), value, timeoutMs);
  }

  async expectSeeAllEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.seeAll), timeoutMs);
  }

  async expectSeeAllCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.seeAll), count, timeoutMs);
  }

  async scrollSeeAllIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.seeAll));
  }

  async doubleClickWebinarFeaturingUkgCustomer(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async longPressWebinarFeaturingUkgCustomer(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async expectWebinarFeaturingUkgCustomerHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), expected, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), substring, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer), timeoutMs);
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

  async scrollWebinarFeaturingUkgCustomerIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomer));
  }

  async doubleClickWebinarFeaturingUkgCustomerGtmMarketing(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async longPressWebinarFeaturingUkgCustomerGtmMarketing(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), expected, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerGtmMarketingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing), substring, timeoutMs);
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

  async scrollWebinarFeaturingUkgCustomerGtmMarketingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerGtmMarketing));
  }

  async doubleClickWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async longPressWebinarFeaturingUkgCustomerLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async expectWebinarFeaturingUkgCustomerLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), expected, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink), substring, timeoutMs);
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

  async scrollWebinarFeaturingUkgCustomerLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerLink));
  }

  async doubleClickWebinarFeaturingUkgCustomerComment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async longPressWebinarFeaturingUkgCustomerComment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async expectWebinarFeaturingUkgCustomerCommentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), expected, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), substring, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), value, timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs);
  }

  async expectWebinarFeaturingUkgCustomerCommentDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment), timeoutMs);
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

  async scrollWebinarFeaturingUkgCustomerCommentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.webinarFeaturingUkgCustomerComment));
  }

  async doubleClickTheRoleOfHrLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async longPressTheRoleOfHrLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async expectTheRoleOfHrLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), expected, timeoutMs);
  }

  async expectTheRoleOfHrLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), substring, timeoutMs);
  }

  async expectTheRoleOfHrLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), value, timeoutMs);
  }

  async expectTheRoleOfHrLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), timeoutMs);
  }

  async expectTheRoleOfHrLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink), count, timeoutMs);
  }

  async scrollTheRoleOfHrLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.theRoleOfHrLink));
  }

  async doubleClickJulySocialSellingUpdatesLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async longPressJulySocialSellingUpdatesLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async expectJulySocialSellingUpdatesLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), expected, timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), substring, timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), value, timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), timeoutMs);
  }

  async expectJulySocialSellingUpdatesLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink), count, timeoutMs);
  }

  async scrollJulySocialSellingUpdatesLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.julySocialSellingUpdatesLink));
  }

  async doubleClickWhatSecuritySeesGoodInten(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten));
  }

  async longPressWhatSecuritySeesGoodInten(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten));
  }

  async expectWhatSecuritySeesGoodIntenHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), expected, timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), substring, timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), value, timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten), count, timeoutMs);
  }

  async scrollWhatSecuritySeesGoodIntenIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodInten));
  }

  async doubleClickWhatSecuritySeesGoodIntenProductEngineeringGlobal(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal));
  }

  async longPressWhatSecuritySeesGoodIntenProductEngineeringGlobal(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal));
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), expected, timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), substring, timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), value, timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), timeoutMs);
  }

  async expectWhatSecuritySeesGoodIntenProductEngineeringGlobalCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal), count, timeoutMs);
  }

  async scrollWhatSecuritySeesGoodIntenProductEngineeringGlobalIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodIntenProductEngineeringGlobal));
  }

  async doubleClickWhatSecuritySeesGoodLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async longPressWhatSecuritySeesGoodLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async expectWhatSecuritySeesGoodLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), expected, timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), substring, timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), value, timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), timeoutMs);
  }

  async expectWhatSecuritySeesGoodLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink), count, timeoutMs);
  }

  async scrollWhatSecuritySeesGoodLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.whatSecuritySeesGoodLink));
  }

  async doubleClickBuildNewsletterJuly2026(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026));
  }

  async longPressBuildNewsletterJuly2026(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026));
  }

  async expectBuildNewsletterJuly2026Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), timeoutMs);
  }

  async expectBuildNewsletterJuly2026Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), expected, timeoutMs);
  }

  async expectBuildNewsletterJuly2026ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), substring, timeoutMs);
  }

  async expectBuildNewsletterJuly2026Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), value, timeoutMs);
  }

  async expectBuildNewsletterJuly2026Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), timeoutMs);
  }

  async expectBuildNewsletterJuly2026Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), timeoutMs);
  }

  async expectBuildNewsletterJuly2026Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), timeoutMs);
  }

  async expectBuildNewsletterJuly2026Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), timeoutMs);
  }

  async expectBuildNewsletterJuly2026Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), timeoutMs);
  }

  async expectBuildNewsletterJuly2026Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026), count, timeoutMs);
  }

  async scrollBuildNewsletterJuly2026IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026));
  }

  async doubleClickBuildNewsletterJuly2026PeopleUkgBuild(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild));
  }

  async longPressBuildNewsletterJuly2026PeopleUkgBuild(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild));
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), expected, timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), substring, timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), value, timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), timeoutMs);
  }

  async expectBuildNewsletterJuly2026PeopleUkgBuildCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild), count, timeoutMs);
  }

  async scrollBuildNewsletterJuly2026PeopleUkgBuildIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.buildNewsletterJuly2026PeopleUkgBuild));
  }

  async doubleClickPolicyGovernanceAtUkgBuilLegalRiskCompliance(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async longPressPolicyGovernanceAtUkgBuilLegalRiskCompliance(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), expected, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), substring, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), value, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgBuilLegalRiskComplianceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance), count, timeoutMs);
  }

  async scrollPolicyGovernanceAtUkgBuilLegalRiskComplianceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgBuilLegalRiskCompliance));
  }

  async doubleClickPolicyGovernanceAtUkgLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async longPressPolicyGovernanceAtUkgLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async expectPolicyGovernanceAtUkgLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), expected, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), substring, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), value, timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), timeoutMs);
  }

  async expectPolicyGovernanceAtUkgLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink), count, timeoutMs);
  }

  async scrollPolicyGovernanceAtUkgLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.policyGovernanceAtUkgLink));
  }

  async doubleClickPhotoOfTheWeekLowellOffiInsideUkg(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async longPressPhotoOfTheWeekLowellOffiInsideUkg(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), value, timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), timeoutMs);
  }

  async expectPhotoOfTheWeekLowellOffiInsideUkgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekLowellOffiInsideUkgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLowellOffiInsideUkg));
  }

  async doubleClickPhotoOfTheWeekLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async longPressPhotoOfTheWeekLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async expectPhotoOfTheWeekLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), expected, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), substring, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), value, timeoutMs);
  }

  async expectPhotoOfTheWeekLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), timeoutMs);
  }

  async expectPhotoOfTheWeekLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink), count, timeoutMs);
  }

  async scrollPhotoOfTheWeekLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.photoOfTheWeekLink));
  }

  async doubleClickAgencyUAgentAThonMovesIntAiHub(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async longPressAgencyUAgentAThonMovesIntAiHub(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async expectAgencyUAgentAThonMovesIntAiHubHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), expected, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), substring, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), value, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntAiHubCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub), count, timeoutMs);
  }

  async scrollAgencyUAgentAThonMovesIntAiHubIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntAiHub));
  }

  async doubleClickAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async longPressAgencyUAgentAThonMovesIntoLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async expectAgencyUAgentAThonMovesIntoLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), expected, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), substring, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), value, timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), timeoutMs);
  }

  async expectAgencyUAgentAThonMovesIntoLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink), count, timeoutMs);
  }

  async scrollAgencyUAgentAThonMovesIntoLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.agencyUAgentAThonMovesIntoLink));
  }

  async doubleClickNewForresterTotalEconomicI(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI));
  }

  async longPressNewForresterTotalEconomicI(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI));
  }

  async expectNewForresterTotalEconomicIHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), expected, timeoutMs);
  }

  async expectNewForresterTotalEconomicIContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), substring, timeoutMs);
  }

  async expectNewForresterTotalEconomicIValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), value, timeoutMs);
  }

  async expectNewForresterTotalEconomicIEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicIFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), timeoutMs);
  }

  async expectNewForresterTotalEconomicICount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI), count, timeoutMs);
  }

  async scrollNewForresterTotalEconomicIIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicI));
  }

  async doubleClickNewForresterTotalEconomicLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async longPressNewForresterTotalEconomicLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async expectNewForresterTotalEconomicLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), expected, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), substring, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), value, timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), timeoutMs);
  }

  async expectNewForresterTotalEconomicLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink), count, timeoutMs);
  }

  async scrollNewForresterTotalEconomicLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.newForresterTotalEconomicLink));
  }

  async doubleClickJuly2026HealthAwarenessSp(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp));
  }

  async longPressJuly2026HealthAwarenessSp(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp));
  }

  async expectJuly2026HealthAwarenessSpHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), expected, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), substring, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), value, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp), count, timeoutMs);
  }

  async scrollJuly2026HealthAwarenessSpIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSp));
  }

  async doubleClickJuly2026HealthAwarenessSpPeopleUkgCares(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async longPressJuly2026HealthAwarenessSpPeopleUkgCares(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), expected, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), substring, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), value, timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), timeoutMs);
  }

  async expectJuly2026HealthAwarenessSpPeopleUkgCaresCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares), count, timeoutMs);
  }

  async scrollJuly2026HealthAwarenessSpPeopleUkgCaresIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.july2026HealthAwarenessSpPeopleUkgCares));
  }

  async doubleClickTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async longPressTakeTheNextStepInYourDevLearningAndDevelopment(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevLearningAndDevelopmentContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment), substring, timeoutMs);
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

  async scrollTakeTheNextStepInYourDevLearningAndDevelopmentIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevLearningAndDevelopment));
  }

  async longPressTakeTheNextStepInYourDevUnsaveNews(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), expected, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), substring, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), value, timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
  }

  async expectTakeTheNextStepInYourDevUnsaveNewsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews), timeoutMs);
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

  async scrollTakeTheNextStepInYourDevUnsaveNewsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepInYourDevUnsaveNews));
  }

  async doubleClickTakeTheNextStepLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async longPressTakeTheNextStepLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async expectTakeTheNextStepLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), timeoutMs);
  }

  async expectTakeTheNextStepLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), expected, timeoutMs);
  }

  async expectTakeTheNextStepLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink), substring, timeoutMs);
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

  async scrollTakeTheNextStepLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.takeTheNextStepLink));
  }

  async doubleClickAiUkgHomeQa(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa));
  }

  async longPressAiUkgHomeQa(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa));
  }

  async expectAiUkgHomeQaHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), timeoutMs);
  }

  async expectAiUkgHomeQaText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), expected, timeoutMs);
  }

  async expectAiUkgHomeQaContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), substring, timeoutMs);
  }

  async expectAiUkgHomeQaValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), value, timeoutMs);
  }

  async expectAiUkgHomeQaEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), timeoutMs);
  }

  async expectAiUkgHomeQaDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), timeoutMs);
  }

  async expectAiUkgHomeQaChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), timeoutMs);
  }

  async expectAiUkgHomeQaUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), timeoutMs);
  }

  async expectAiUkgHomeQaFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), timeoutMs);
  }

  async expectAiUkgHomeQaCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa), count, timeoutMs);
  }

  async scrollAiUkgHomeQaIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.aiUkgHomeQa));
  }

  async doubleClickAi(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async longPressAi(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

  async expectAiHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, SavedNewsPage.L.ai), expected, timeoutMs);
  }

  async expectAiContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, SavedNewsPage.L.ai), substring, timeoutMs);
  }

  async expectAiValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, SavedNewsPage.L.ai), value, timeoutMs);
  }

  async expectAiEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, SavedNewsPage.L.ai), timeoutMs);
  }

  async expectAiCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, SavedNewsPage.L.ai), count, timeoutMs);
  }

  async scrollAiIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, SavedNewsPage.L.ai));
  }

}

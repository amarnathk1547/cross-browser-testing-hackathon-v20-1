module.exports = {
    // App Versions
    APP_VERSION_V1: 'V1',
    APP_VERSION_V2: 'V2',

    // Ids
    DEMO_APP: 'Demo App',
    TASK_ID_1: 'Task 1',
    TASK_ID_2: 'Task 2',
    TASK_ID_3: 'Task 3',

    // View port constants
    VIEWPORT_LAPTOP : '1200x700',
    VIEWPORT_TABLET : '785x700',
    VIEWPORT_MOBILE : '500x700',

    // Device constants
    DEVICE_LAPTOP: 'laptop',
    DEVICE_TABLET: 'tablet',
    DEVICE_MOBILE: 'mobile',

    // Element constants
    WAIT_TIME: 3000,

    // Locators related to app V1
    LOCATOR_SEARCH_BAR : '#DIV__customsear__41',
    LOCATOR_SEARCH_ICON : '#A__btnsearchm__59',
    LOCATOR_WISHLIST: '#A__wishlist__52',
    LOCATOR_FILTER_ICON: '#ti-filter',
    LOCATOR_FILTER_TEXT: '//span[contains(text(),"Filters")]',
    LOCATOR_ADD_TO_FAVORITES: '//a[@data-original-title="Add to favorites"]',
    LOCATOR_ADD_TO_COMPARE: '//a[@data-original-title="Add to compare"]',
    LOCATOR_ADD_TO_CART: '//a[@data-original-title="Add to cart"]',
    LOCATOR_OPEN_FILTERS: '//i[@class="ti-filter"]/..',
    LOCATOR_BLACK_CHECK_BOX: '#LABEL__containerc__104',
    LOCATOR_SUBMIT_FILTER_BUTTON: '#filterBtn',
    LOCATOR_GRID_ITEM: '(//div[@class="grid_item"])[1]',

    // Locators unrelated to app V1
    LOCATOR_VIEW_GRID_TABLET: '.ti-view-grid',
    LOCATOR_VIEW_LIST_TABLET: '.ti-view-list',

    // Region selectors
    REGION_PRODUCT_GRID: 'product_grid',

    // Constant Numbers
    NUMBER_ONE: 1,
    NUMBER_TWO: 2,
    NUMBER_THREE: 3,
    NUMBER_FOUR: 4,

    // Success messages
    // Search field
    SUCCESS_MESSAGE_SEARCH_FIELD_DISPLAYED_LAPTOP: 'Search field is displayed in laptop',
    SUCCESS_MESSAGE_SEARCH_FIELD_DISPLAYED_TABLET: 'Search field is displayed in tablet',
    SUCCESS_MESSAGE_SEARCH_ICON_DISPLAYED_MOBILE: 'Search icon is displayed in mobile',
    // Wishlist
    SUCCESS_MESSAGE_WISHLIST_DISPLAYED_LAPTOP: 'Wishlist is displayed in laptop',
    SUCCESS_MESSAGE_WISHLIST_NOT_DISPLAYED_TABLET: 'Wishlist is not displayed in tablet',
    SUCCESS_MESSAGE_WISHLIST_NOT_DISPLAYED_MOBILE: 'Wishlist is not displayed in mobile',
    // Filter Icon
    SUCCESS_MESSAGE_FILTER_ICON_NOT_DISPLAYED_LAPTOP: 'Filter icon is not displayed in laptop',
    SUCCESS_MESSAGE_FILTER_ICON_DISPLAYED_TABLET: 'Filter icon is displayed in tablet',
    SUCCESS_MESSAGE_FILTER_ICON_DISPLAYED_MOBILE: 'Filter icon is displayed in mobile',
    // Filter Text
    SUCCESS_MESSAGE_FILTER_TEXT_NOT_DISPLAYED_LAPTOP: 'Filter text is not displayed in laptop',
    SUCCESS_MESSAGE_FILTER_TEXT_DISPLAYED_TABLET: 'Filter text is displayed in tablet',
    SUCCESS_MESSAGE_FILTER_TEXT_NOT_DISPLAYED_MOBILE: 'Filter text is not displayed in mobile',

    // Failure messages
    // Search field
    FAILURE_MESSAGE_SEARCH_FIELD_NOT_DISPLAYED_LAPTOP: 'Failed: Search field is not displayed in laptop',
    FAILURE_MESSAGE_SEARCH_FIELD_NOT_DISPLAYED_TABLET: 'Failed: Search field is not displayed in tablet',
    FAILURE_MESSAGE_SEARCH_ICON_NOT_DISPLAYED_MOBILE: 'Failed: Search icon is not displayed in mobile',
    // Wishlist
    FAILURE_MESSAGE_WISHLIST_NOT_DISPLAYED_LAPTOP: 'Failed: Wishlist is not displayed in laptop',
    FAILURE_MESSAGE_WISHLIST_DISPLAYED_TABLET: 'Failed: Wishlist is displayed in tablet',
    FAILURE_MESSAGE_WISHLIST_DISPLAYED_MOBILE: 'Failed: Wishlist is displayed in mobile',
    // Filter Icon
    FAILURE_MESSAGE_FILTER_ICON_DISPLAYED_LAPTOP: 'Failure: Filter icon is displayed in laptop',
    FAILURE_MESSAGE_FILTER_ICON_NOT_DISPLAYED_TABLET: 'Failure: Filter icon is not displayed in tablet',
    FAILURE_MESSAGE_FILTER_ICON_NOT_DISPLAYED_MOBILE: 'Failure: Filter icon is not displayed in mobile',
    // Filter Text
    FAILURE_MESSAGE_FILTER_TEXT_DISPLAYED_LAPTOP: 'Failure: Filter text is displayed in laptop',
    FAILURE_MESSAGE_FILTER_TEXT_NOT_DISPLAYED_TABLET: 'Failure: Filter text is not displayed in tablet',
    FAILURE_MESSAGE_FILTER_TEXT_DISPLAYED_MOBILE: 'Failure: Filter text is displayed in mobile',
}
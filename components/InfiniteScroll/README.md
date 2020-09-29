## Functionality for Infinite Scroll
## The code when copied to codesandbox should run without errors immediately.




## Functionality
# Load more items when the vertical scroll is about to reach the end.
# Show a loading message when new elements are loading.
# support both window and scrollable elements.
# Cross browser support. Some dom apis may not work in old browsers.
# Does the infinite scroll component is also supposed to be mobile friendly. touchevents ?

# Props to react component: loadMore. 
# loader
# hasMore: whether more items are to be loaded. Event Listeners are removed when this is false.
# threshold when to trigger the next fetch of data
# useWindow


## Learnings.

# Data fetch
# Scroll handler. On what condition will you will fetch more data.
# Condition to determine if element has been totally scrolled & you need to fetch more data.
# element.scrollTop + element.clientHeight === element.scrollHeight
# element.scrollTop or element.pageYOffset dom property. Number of pixels that element content is scrolled vertically.
# DOM apis you will need element.scrollHeight, element.clientHeight and element.scrollTop
# Add some buffer to fetch data before you reach the end of scroll
# element.scrollTop + element.clientHeight >= element.scrollHeight - 20.
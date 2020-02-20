/*
	Daily Challenge 2/13/2020

    Implement a least recently used cache. The cache's constructor should take as an argument a capacity.
    When the cache reaches capacity, the least recently accessed entry in the cache should be replaced if
    a new item is added to the cache.

    Requirements:
        constructor: accepts an initial capacity as its argument
        put(key,value): places an item on the cache. If the cache is full, replaces the least recently used item
        get(key): Retrieves the item associated with the specified key from the cache.

    Considerations:
        Caches should be *fast*. Try to implement this in a fashion where both puts and gets operate in O(1) time

    The following code will get you started down the right path.
*/

const LruCache = function(capacity){
    // Internal state should be here
    return {
        put: function(key,value) {
            // put function body here
        },
        get: function(key) {
            // get function body here
        }
    };
}(3);

LruCache.put("f", "foo");
LruCache.put("b", "bar");
LruCache.put("z", "baz");

LruCache.get("b");
LruCache.put("f", "oof");
LruCache.put("x", "rab");

console.info(LruCache.get("z")); // Should be null

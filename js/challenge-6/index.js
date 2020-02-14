/*
    Daily Challenge 2/14/2020

    Write a class which has two functions: encode() and decode().
    Each should accept two arguments: a message to encode/decode and an encoding type.
    Your function should accept three encoding formats: "MRS", "HEX", and "BIN".

    MRS - Encode the string in morse code using . and _ as dot and dash characters
            https://en.wikipedia.org/wiki/Morse_code
    HEX - Encode the string into hexidecimal format
            https://en.wikipedia.org/wiki/Hexadecimal
    BIN - Encode the string in binary format
            https://en.wikipedia.org/wiki/Binary_code

    BONUS: Add support for "PIG" which will encode the string into Pig Latin. https://en.wikipedia.org/wiki/Pig_Latin
    Requirements:
        encode(str, encoding-type): Returns the encoded string
        decode(str, encoding-type): Returns the decoded string

    Considerations:
        Encode and decode are inverse operations. That means that
            decode(encode("string", "BIN"), "BIN")
            and
            encode(decode("ingstray", "PIG"), "PIG")
        should return the "string".

    The following code will get you started down the right path.
*/

const Encoder = function(capacity){
    // Internal state should be here
    return {
        encode: function(str, encoding) {
            // put function body here
        },
        decode: function(str, encoding) {
            // get function body here
        }
    };
}();

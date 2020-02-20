import re

def get_character_counts(str):
    # All characters should be 0 to begin
    characters = [0] * 26

    # lowercase the string and remove all non-alphabet characters
    for c in re.sub('[^a-z]', '', str.lower()):
        characters[ord(c) - ord('a')] += 1

    return characters

assert([2, 2, 2, 2, 2, 2, 1] + [0]*19 == \
 get_character_counts('abcdefabcdefg'))

assert([2, 2, 2, 2, 2, 2, 1] + [0]*19 == \
 get_character_counts('ABCDEFABCDEFG'))

assert([0] * 26 == get_character_counts('$$$ 123 $$$'))

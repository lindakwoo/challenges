def get_outlier(numbers):
    # Get the lowest order bit of all numbers and perform a sum
    # There will be either a single 0 or a single 1. Find it and
    # return the value of numbers[idx]

    lo_bits = list(map(lambda n: n & 0x1, numbers))
    if lo_bits.count(0) > 1:
        return numbers[lo_bits.index(1)]
    else:
        return numbers[lo_bits.index(0)]

print(get_outlier([0,1,2,4,6,8]))
print(get_outlier([1,3,5,4,7,11]))

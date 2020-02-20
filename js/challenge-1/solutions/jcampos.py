import functools

def get_n_minus_1_products(numbers):
    # There should be n products since (n choose n-1) == n
    zeros = numbers.count(0)

    if zeros >= 2:
        # If there are 2 or more zeros, all products are zeros
        # by pigeon-hole principle.
        return [0] * len(numbers)
    elif zeros == 1
        # If a single zero exists, then there will be n-1 zeros
        # and a single product of all other items
        nz_product = functools.reduce(lambda a,b: a * b, \
            list(filter(lambda n: n != 0, numbers)))

        return [0] * (len(numbers) - 1) + [nz_product]
    else
        products = []
        product = functools.reduce(lambda a,b: a * b, numbers)

        for num in numbers:
            # Never divide by 0. Return the total if 0
            products.insert(0, product/num)

        return products

assert([6,12,18,36] == get_n_minus_1_products([1,2,3,6]))
assert([0,0,0,36] == get_n_minus_1_products([0,2,3,6]))
assert([0,0,0,0,0,0] == get_n_minus_1_products([0,0,1,2,3,6]))
assert([6,-12,18,-36] == get_n_minus_1_products([-1,2,-3,6]))

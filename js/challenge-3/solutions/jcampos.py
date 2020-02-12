import math

def find_largest_prime_in_string(str):
    # Use sieve to cache primes
    max = math.floor(math.sqrt(int(str)))

    # Initialize our set of primes.
    # + 1 for the max_factor itself in zero-based idx
    sieve = [-1] * (max + 1)

    # Initialize the sieve
    for i in range(2, max):
        # If this number has been seen and is not prime, continue
        if sieve[i] == 0:
            continue;

        # If this number has not been seen, its a prime
        if sieve[i] == -1:
            sieve[i] = 1

        # Update the sieve to remove all multiple of the prime
        k = 2
        while i * k <= max:
            sieve[i * k] = 0
            k += 1

    # Any index with a 1 is a prime
    primes = []
    for i in range(2, len(sieve)):
        if sieve[i] == 1:
            primes.append(i)

    # Now find the longest prime
    for i in range(len(str)):
        number = int(str[0:len(str) - i])

        # Edge case: 1 is NOT prime
        if number == 1:
            return

        # If the number is in our list of primes, then we have a winner
        if number in primes:
            return number

        # Otherwise, attempt to divide this number by all known primes
        # If it divides by any prime, it cannot be prime. Only need to
        # go up to the square root of this number
        is_prime = True
        sqrt = math.sqrt(number)

        for p in primes:
            # Stop once we get to the sqrt of this number
            if p >= sqrt:
                break

            if number % p == 0:
                is_prime = False
                break

        if is_prime:
            return number

    return

assert(None == find_largest_prime_in_string("1"))
assert(None == find_largest_prime_in_string("100"))
assert(2 == find_largest_prime_in_string("20"))
assert(13 == find_largest_prime_in_string("13"))
assert(13 == find_largest_prime_in_string("130"))
assert(13755789515459 == find_largest_prime_in_string("13755789515459"))
assert(13755789515459 == find_largest_prime_in_string("137557895154590"))

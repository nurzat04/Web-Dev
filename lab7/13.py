a = int(input())
b = int(input())

for n in range(a, b + 1):
    if (n ** 0.5).is_integer():
        print(n, end=" ")

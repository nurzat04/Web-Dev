a = int(input())
b = int(input())
c = int(input())
d = int(input())

for n in range(a, b + 1):
    if n % d == c:
        print(n, end=" ")

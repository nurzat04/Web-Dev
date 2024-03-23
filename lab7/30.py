n = int(input())
a = list(map(int, input().split()))
for num in a:
    if num % 2 == 0:
        print(num, end=" ")

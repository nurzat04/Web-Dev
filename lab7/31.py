n = int(input())
a = list(map(int, input().split()))

count = sum(1 for num in a if num > 0)

print(count)

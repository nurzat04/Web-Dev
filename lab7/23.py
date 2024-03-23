n = int(input())
count = 0

for _ in range(n):
    number = int(input())
    if number == 0:
        count += 1

print(count)

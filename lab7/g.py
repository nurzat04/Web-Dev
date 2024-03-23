def calculate_happiness(n, m, array, A, B):
    happiness = 0
    for num in array:
        if num in A:
            happiness += 1
        elif num in B:
            happiness -= 1
    return happiness

if __name__ == "__main__":
    n, m = map(int, input().split())
    array = list(map(int, input().split()))
    A = set(map(int, input().split()))
    B = set(map(int, input().split()))
    print(calculate_happiness(n, m, array, A, B))

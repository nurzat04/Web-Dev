from itertools import product

if __name__ == '__main__':
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))
    
    result = list(product(A, B))
    print(result) #[(1, 3), (1, 4), (2, 3), (2, 4)]
    print(*result) #(1, 3) (1, 4) (2, 3) (2, 4)

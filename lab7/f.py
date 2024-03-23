def print_door_mat(N, M):
    upper_rows = (N - 1) // 2
    lower_rows = upper_rows

    for i in range(upper_rows):
        print(('.|.' * (2 * i + 1)).center(M, '-'))

    print('WELCOME'.center(M, '-'))

    for i in range(lower_rows - 1, -1, -1):
        print(('.|.' * (2 * i + 1)).center(M, '-'))

if __name__ == '__main__':
    N, M = map(int, input().split())
    print_door_mat(N, M)
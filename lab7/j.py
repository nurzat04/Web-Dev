if __name__ == "__main__":
    n = int(input())
    elements = set(map(int, input().split()))
    num_commands = int(input())
    commands = [input().split() for _ in range(num_commands)]

    for cmd in commands:
        if cmd[0] == "pop":
            elements.pop()
        elif cmd[0] == "remove":
            elements.remove(int(cmd[1]))
        elif cmd[0] == "discard":
            elements.discard(int(cmd[1]))

    print(sum(elements))

if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    scores = list(arr)
    scores.sort(reverse=True)
    
    runner_up = None
    for score in scores:
        if score < max(scores):
            runner_up = score
            break
   
    print(runner_up)

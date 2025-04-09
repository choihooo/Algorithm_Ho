def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()
    for i in range(len(completion)):
        if participant[i] != completion[i]:
            answer = str(participant[i])
            break;
    if answer == '':
        answer = str(participant[len(participant)-1])
    return answer
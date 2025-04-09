def solution(phone_book):
    answer = True
    phone_book = sorted(phone_book)

    for i in range(1,len(phone_book)):   
        if phone_book[i-1] in phone_book[i][:len(phone_book)+1]:
            answer = False
                        
    return answer
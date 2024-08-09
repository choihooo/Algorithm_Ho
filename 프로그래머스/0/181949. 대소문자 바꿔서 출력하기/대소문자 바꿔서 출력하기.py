str_input = input()
answer = []
for c in str_input:
    if c.isupper(): 
        c = c.lower()  
        answer.append(c)
    elif c.islower():  
        c = c.upper()  
        answer.append(c)
        
print(''.join(answer))

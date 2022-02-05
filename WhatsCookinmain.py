#class WhatsCookinmain:
#
 # @staticmethod
#  def static_method():
    
# Intro user prompts, collecting input values 

skipSurvey = 1 # sets default status to prompt the user for new account survey, disabled after signing in

print("Welcome to WhatsCookin!")

userInpt = input("Would you like to sign in or create an account? Type 'S' to sign in, or 'C' to create an account.")
userInpt.upper


if userInpt == "S" or "C":

    # Prompts user for email and password, verifies and checks with server passwords
    if userInpt == "S": 

        print("Please enter your email here:")
        nameInpt = input("Account email: ")
        nameInpt.upper
        # TO DO: implement text file for usernames, passwords to write to and read from if needed

        print("Please enter your password here:")
        passInpt = input("Password: ")
        passInpt.upper

        # bypasses new account survey if signing in to existing account
        skipSurvey = 0

    # Creates new acct' by prompting user for email and password, verifies and checks with server passwords
    if userInpt == "C":
        print("Please enter your email here: ")
        nameInpt = input("Account email: ")
        nameInpt.upper
        
        print("Please enter your password here:")
        passInpt = input("Password: ")
        passInpt.upper
        #TO DO: Save email and password to storage file

while userInpt != "S" and userInpt != "C":    
    print("Sorry, your input was invalid. Please type 'S' to sign in, or 'C' to create an account.")
    userInpt = input("Please try again here:")
    userInpt.upper

# preference survey for new accounts, collects values and ties them to account
while skipSurvey != 0:
    print("\n\n\n\n\n") ## TO DO: BETTER WAY OF CLEARING SCREEN
    print("Before you can get started enjoying meals with friends, we'd like to know a little bit more about you.\n")

    # NAME PROMPT
    print("First, what is your preferred name?")
    userName = input()

    # PRONOUN PROMPT
    print("Thanks, " + userName + "! What are your preferred pronouns?\n")
    print("Please type 1 for he/him, 2 for she/her, 3 for they/them, or 4 for other pronouns")
    userInpt = input()
    userPronouns = int(userInpt)

    # PRONOUN BULLETPROOFING
    while userPronouns == 4:
        print("Sorry, this feature is unavailable at the moment.")
        # TO DO: IMPLEMENT CUSTOM PRONOUNS
        print("Please type 1 for he/him, 2 for she/her, 3 for they/them, or 4 for other pronouns")
        userInpt = input()
        userPronouns = int(userInpt)
    while userPronouns != 1 and userPronouns != 2 and userPronouns != 3 and userPronouns != 4:
        print("Sorry, that wasn't a recognized input.")
        print("Please type 1 for he/him, 2 for she/her, 3 for they/them, or 4 for other pronouns")
        userInpt = input()
        userPronouns = int(userInpt)
 

    # CHEF EXPERIENCE PROMPT
    print("\nOn a scale of 1 to 3, 1 being no experience at all and 3 being a frequent chef,\nhow much cooking experience do you have?")
    print("Please type a number from 1-3: ")
    userInpt = input()
    userExp = int(userInpt)

    # EXPERIENCE BULLETPROOFING
    while userExp != 1 and userExp != 2 and userExp != 3:
            print("Sorry, that wasn't a recognized input.")
            print("Please type a number from 1-3: ")
            userInpt = input()
            userExp = int(userInpt)

    # USER UTENSILS PROMPT
    print("\nOn a scale of 1 to 3, 1 being no kitchenware at all and 3 being you own every peeler known to humanity,\n how much cooking equipment do you own?")
    print("Please type a number from 1-3: ")
    userInpt = input()
    userUtns = int(userInpt)

    # UTENSILS BULLETPROOFING
    while userUtns != 1 and userUtns != 2 and userUtns != 3:
        print("Sorry, that wasn't a recognized input.")
        print("Please type a number from 1-3: ")
        userInpt = input()
        userUtns = int(userInpt)
        
    skipSurvey = 0

    






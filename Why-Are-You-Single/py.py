import random

def why_am_i_single():
    reasons = [
        "I'm focusing on myself!",
        "Still haven't found the right person.",
        "I like my freedom and space.",
        "Programming takes up all my time!",
        "I'm too picky with my choices.",
        "I haven't met anyone who likes Python as much as I do!"
    ]
    
    return random.choice(reasons)

if __name__ == "__main__":
    print("Why Am I Single?")
    input("Press Enter to find out...")
    print(why_am_i_single())
def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0  # No
    elif you >= 8 or date >= 8:
        return 2  # Yes
    else:
        return 1  # Maybe
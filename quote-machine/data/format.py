def format_data():

    # open data files
    f = open("data/small.json", "rt")
    nf = open("data/new.json", "w")
    
    # keep track of the line number
    line_count = 0

    # id of a quote
    id = 0
    
    for line in f:
        line_count += 1

        # copy the non-text line
        if line_count % 3 == 1 or "]" in line :
            nf.write(line)
            continue
        
        
        if line_count % 3 == 2:
            # insert the id before the quote line
            nf.write(f"\t\"id\": {id},\n")
            id += 1
            # format and insert the quote line
            str = line.replace("quoteText", "quote")
            nf.write(str)

        else:
            # format and insert the author line
            str = line.replace("quoteAuthor", "author")
            nf.write(str)

    f.close()
    nf.close()

def load_data():
    pass


if __name__ == '__main__':
    format_data()
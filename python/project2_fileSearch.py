import os

def main(choice):
    path = input("enter your folder path: ").strip()
    if (not os.path.isdir(path)):
        print("Folder doesn't exist.")
        exit()
    
    if choice == "1":
        ext = input("Enter the file extension: ").strip()
        return path, ext
    elif choice == "2":
        size = int(input("int minimun file size: "))
        return path, size
    elif choice == "3":
        ext = input("Enter the file extension: ").strip()
        size = int(input("int minimun file size: "))
        return path,ext, size
    elif choice == "4":
        word = input("Enter your keyword: ").strip()
        return path, word



def scan_by_extension(path,ext):
    print(f"Files ending  with '{ext}': ")
    found = False

    for file in os.listdir(path):
        if(file.endswith(ext)):
            print(file)
            found = True
    if not found:
        print("No files with that extension.")


def scan_by_fileSize(path,size):
    print(f"Files larger than {size} KB: ")
    found = False
    for file in os.listdir(path):
        filePath = os.path.join(path, file)
        if(os.path.isfile(filePath)):
            fileSize = os.path.getsize(filePath)/1024
            if(fileSize >= size):
                print(f"{file} - {fileSize:.2f}KB")
                found = True
    if not found:
        print(f"No files larger than {size}KB")


def scan_by_SizeN_ext(path,ext,size):
    print(f"Files ending  with '{ext}' and larger than {size} KB: ")
    found = False
    for file in os.listdir(path):
        filePath = os.path.join(path,file)
        if (file.endswith(ext) and os.path.isfile(filePath)):
            fileSize = os.path.getsize(filePath)/1024
            if(fileSize >= size):
                print(f"{file} - {fileSize:.2f}KB")
                found = True
    if not found:
        print(f"No '{ext}' file found larger than {size}KB")


def scan_by_keyWord(path, word):
    print(f"files that contains the word '{word}': ")
    found =False
    for file in os.listdir(path):
        filePath = os.path.join(path,file)
        if(os.path.isfile(filePath)):
            try:
                with open(filePath,"r", encoding="utf-8", errors="ignore") as f:
                    content = f.read()
                    if word in content:
                        print(file)
                        found = True
            except Exception as e:
                pass
    if not found:
        print(f"No files found with '{word}' keyword.")        




print("---Choose an option: ---\n1. Scan by extension\n2. Scan by file size\n3. Scan by extension and size\n4. scan for keyword inside file")

choice = input("Enter your choice: ")

if(choice == "1"):
    path,ext = main(choice)
    scan_by_extension(path,ext)

elif(choice == "2"):
    path,size = main(choice)
    scan_by_fileSize(path,size)

elif(choice == "3"):
    path,ext,size = main(choice)
    scan_by_SizeN_ext(path,ext,size)

elif(choice == "4"):
    path,word = main(choice)
    scan_by_keyWord(path, word)

else:
    print("Invalid Choice....")


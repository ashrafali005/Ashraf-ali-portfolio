def caesar_encrypt(text, shift):
    """
    Encrypt the text using Caesar Cipher.
    """
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            shift_base = ord('A') if char.isupper() else ord('a')
            encrypted_text += chr((ord(char) - shift_base + shift) % 26 + shift_base)
        else:
            encrypted_text += char
    return encrypted_text


def caesar_decrypt(text, shift):
    """
    Decrypt the text using Caesar Cipher.
    """
    decrypted_text = ""
    for char in text:
        if char.isalpha():
            shift_base = ord('A') if char.isupper() else ord('a')
            decrypted_text += chr((ord(char) - shift_base - shift) % 26 + shift_base)
        else:
            decrypted_text += char
    return decrypted_text


def main():
    """
    Main function to encrypt and decrypt a message.
    """
    print("Welcome to Caesar Cipher Program!")
    
    # Step 1: Encryption
    message = input("Enter the message you want to encrypt: ").strip()
    shift = int(input("Enter the shift value (integer): ").strip())
    encrypted_message = caesar_encrypt(message, shift)
    print("\nEncrypted Message:", encrypted_message)
    
    # Step 2: Decryption
    decrypted_message = caesar_decrypt(encrypted_message, shift)
    print("\nDecrypted Message:", decrypted_message)


if __name__ == "__main__":
    main()

from pypdf import PdfReader

# Read the PDF file
reader = PdfReader('documentation-architecture-technique.pdf')

# Extract text from all pages
full_text = ""
for page_num, page in enumerate(reader.pages, 1):
    text = page.extract_text()
    full_text += f"\n\n=== PAGE {page_num} ===\n\n{text}"

# Save to a text file
with open('architecture_extracted.txt', 'w', encoding='utf-8') as f:
    f.write(full_text)

print(f"Extracted {len(reader.pages)} pages successfully!")
print("Content saved to architecture_extracted.txt")

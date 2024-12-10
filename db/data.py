from bs4 import BeautifulSoup
import csv

# Load the HTML content from the file
with open('/Users/aaryas127/Documents/GitHub/pharmapp/db/drug_list.html', 'r', encoding='utf-8') as file:
    html_content = file.read()

# Parse the HTML with BeautifulSoup
soup = BeautifulSoup(html_content, 'html.parser')

# Customize the selection based on the actual HTML structure (e.g., table rows, list items)
# Assuming drugs are listed in a table under a specific class
drug_list = []

# Example: if drugs are in <tr> within a <table>
for row in soup.find_all('tr'):
    columns = row.find_all('td')  # Assuming drug name is in one of the <td> cells
    if columns:
        # Adjust the index based on which cell contains the drug name
        drug_name = columns[0].get_text(strip=True)
        drug_list.append(drug_name)

# Save the drug names to a CSV file
output_file = '/Users/aaryas127/Documents/GitHub/pharmapp/db/drug_prices.csv'
with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Drug Name'])  # Header row
    for drug in drug_list:
        writer.writerow([drug])

print(f"Drugs saved to {output_file}")
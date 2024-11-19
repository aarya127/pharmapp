from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time
import pandas as pd

# Set up the web driver (requires ChromeDriver)
driver = webdriver.Chrome()

# Open the website
url = "https://www.pharmacychecker.com/drug-price-comparisons/#"
driver.get(url)

# Wait for the page to load fully
time.sleep(5)

# Locate the drug price table
drug_data = []
rows = driver.find_elements(By.XPATH, "//table[contains(@class, 'drug-price-table')]//tr")

for row in rows[1:]:  # Skip the header
    columns = row.find_elements(By.TAG_NAME, "td")
    if columns:
        drug_name = columns[0].text
        price = columns[1].text
        drug_data.append({"Drug Name": drug_name, "Price": price})

# Close the browser
driver.quit()

# Convert to a DataFrame
df = pd.DataFrame(drug_data)
print(df)

# Save to CSV
df.to_csv("drug_prices.csv", index=False)

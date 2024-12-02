from openai import OpenAI


# Reading the entire file content
with open("/Users/aaryas127/Documents/GitHub/pharmapp/pharmapp-backend/api_key.txt", 'r') as file:
    content = file.read()
    print(content)

# Initialize OpenAI client
client = OpenAI(
  base_url="https://integrate.api.nvidia.com/v1",  # You can change this to OpenAI's URL if needed
  api_key=str(content)
)

completion = client.chat.completions.create(
  model="nvidia/llama-3.1-nemotron-70b-instruct",
  messages=[{"role":"user","content":"What is the average price of Ventolin HFA 100 in Canada?"}],
  temperature=0.5,
  top_p=1,
  max_tokens=1024,
  stream=True
)

for chunk in completion:
  if chunk.choices[0].delta.content is not None:
    print(chunk.choices[0].delta.content, end="")

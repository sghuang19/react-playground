import os
import frontmatter
import markdown

input_dir = 'posts'
output_dir = 'public/posts'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# TODO: Incremental generation
# TODO: Clean generated files

for filename in os.listdir(input_dir):
    if filename.endswith('.md'):
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, filename.replace('.md', '.html'))

        with open(input_path, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
            html_content = markdown.markdown(post.content)

        # Extract metadata
        title = post.get('title', 'Untitled')
        description = post.get('description', '')
        thumbnail = post.get('thumbnail', '/default-thumbnail.jpg')
        date = post.get('date', '')
        stars = post.get('stars', 0)

        html_output = f"""
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>{title}</title>
            <meta name="description" content="{description}" />
            <meta property="og:image" content="{thumbnail}" />
            <meta property="article:published_time" content="{date}" />
            <meta name="stars" content="{stars}" />
        </head>
        <body>
            {html_content}
        </body>
        </html>
        """

        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(html_output)

print("HTML generation complete.")

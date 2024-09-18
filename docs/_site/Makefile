# Makefile for a Jekyll project

# Define a variable for the Jekyll command
JEKYLL := jekyll

# Default target
all: build serve install

# Build the site
build:
	@echo "Building the Jekyll site..."
	$(JEKYLL) build

# Serve the site locally
serve:
	@echo "Serving the Jekyll site locally..."
	$(JEKYLL) serve

# Clean up generated files
clean:
	@echo "Cleaning up generated files..."
	$(JEKYLL) clean

# Install dependencies (assumes Bundler is used)
install:
	@echo "Installing dependencies..."
	bundle install

# Create a new post
new-post:
	@echo "Creating a new post with title: $(title)..."
	$(JEKYLL) post "posts/$(title).md"

# Deploy the site (customize as needed for your deployment process)
deploy:
	@echo "Deploying the site..."
	# Add your deployment commands here
	# Example: rsync -avz _site/ user@server:/path/to/deploy

# Check the status of the Jekyll site
status:
	@echo "Checking the status of the Jekyll site..."
	$(JEKYLL) doctor

stop:
	@echo "Stopping jekyll server"
	pkill -f $(JEKYLL)

start:
	@echo "Starting jekyll server"
	bundle exec $(JEKYLL) serve
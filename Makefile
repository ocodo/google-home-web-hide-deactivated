# Makefile for creating a ZIP file

# Define variables
ZIP_FILE = google-home-hide-deactivated.zip
FILES = content.js manifest.json

# Default target
all: $(ZIP_FILE)

# Rule to create the ZIP file
$(ZIP_FILE): $(FILES)
	zip -r $@ $^

# Clean up the ZIP file
clean:
	rm -f $(ZIP_FILE)

.PHONY: all clean


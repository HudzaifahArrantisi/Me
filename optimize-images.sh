#!/bin/bash

# Image Optimization Script
# This script optimizes images for web performance

echo "Starting image optimization..."

# Create optimized directory
mkdir -p img/optimized

# Function to optimize images
optimize_image() {
    local input_file="$1"
    local output_file="img/optimized/$(basename "$input_file")"
    
    # Get file extension
    local ext="${input_file##*.}"
    ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    
    case "$ext" in
        "jpg"|"jpeg")
            # Optimize JPEG with quality 85
            convert "$input_file" -strip -quality 85 -resize "1200x1200>" "$output_file"
            ;;
        "png")
            # Optimize PNG with compression
            convert "$input_file" -strip -resize "1200x1200>" "$output_file"
            ;;
        "webp")
            # Convert to optimized WebP
            convert "$input_file" -strip -quality 85 -resize "1200x1200>" "${output_file%.*}.webp"
            ;;
    esac
    
    # Show optimization results
    local original_size=$(stat -c%s "$input_file" 2>/dev/null || stat -f%z "$input_file" 2>/dev/null)
    local optimized_size=$(stat -c%s "$output_file" 2>/dev/null || stat -f%z "$output_file" 2>/dev/null)
    local savings=$((original_size - optimized_size))
    local savings_percent=$((savings * 100 / original_size))
    
    echo "Optimized: $(basename "$input_file") - Saved ${savings_percent}% (${savings} bytes)"
}

# Process all images in img directory
find img -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r file; do
    optimize_image "$file"
done

# Process images in subdirectories
find img -mindepth 2 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp" \) | while read -r file; do
    # Create subdirectory structure
    local_dir="img/optimized/$(dirname "$file" | sed 's|^img/||')"
    mkdir -p "$local_dir"
    
    # Optimize with subdirectory structure
    input_file="$file"
    output_file="$local_dir/$(basename "$file")"
    
    ext="${input_file##*.}"
    ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
    
    case "$ext" in
        "jpg"|"jpeg")
            convert "$input_file" -strip -quality 85 -resize "1200x1200>" "$output_file"
            ;;
        "png")
            convert "$input_file" -strip -resize "1200x1200>" "$output_file"
            ;;
        "webp")
            convert "$input_file" -strip -quality 85 -resize "1200x1200>" "${output_file%.*}.webp"
            ;;
    esac
done

echo "Image optimization complete! Check img/optimized/ directory for optimized images."
echo "Total size reduction:"
du -sh img/
du -sh img/optimized/ 2>/dev/null || echo "No optimized images found"
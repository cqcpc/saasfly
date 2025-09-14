"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import { cn } from "@saasfly/ui";
import { Button } from "@saasfly/ui/button";
import { Card, CardContent } from "@saasfly/ui/card";
import * as Icons from "@saasfly/ui/icons";
import { toast } from "@saasfly/ui/use-toast";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  onImageRemove: () => void;
  uploadedImage?: string | null;
  isUploading?: boolean;
  className?: string;
}

export function ImageUpload({
  onImageUpload,
  onImageRemove,
  uploadedImage,
  isUploading = false,
  className,
}: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        // 验证文件类型
        if (!file.type.startsWith("image/")) {
          toast({
            title: "Invalid file type",
            description: "Please upload an image file (JPG, PNG, etc.)",
            variant: "destructive",
          });
          return;
        }

        // 验证文件大小 (10MB)
        if (file.size > 10 * 1024 * 1024) {
          toast({
            title: "File too large",
            description: "Please upload an image smaller than 10MB",
            variant: "destructive",
          });
          return;
        }

        onImageUpload(file);
      }
    },
    [onImageUpload],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
    },
    multiple: false,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  });

  if (uploadedImage) {
    return (
      <Card className={cn("relative overflow-hidden", className)}>
        <CardContent className="p-0">
          <div className="relative aspect-video w-full">
            <Image
              src={uploadedImage}
              alt="Uploaded image"
              fill
              className="object-cover"
            />
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="flex items-center space-x-2 text-white">
                  <Icons.Spinner className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Processing...</span>
                </div>
              </div>
            )}
            <Button
              variant="destructive"
              size="icon"
              className="absolute right-2 top-2"
              onClick={onImageRemove}
              disabled={isUploading}
            >
              <Icons.X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "border-2 border-dashed transition-colors",
        isDragActive || dragActive
          ? "border-primary bg-primary/5"
          : "border-muted-foreground/25 hover:border-muted-foreground/50",
        className,
      )}
    >
      <CardContent className="p-0">
        <div
          {...getRootProps()}
          className="flex min-h-[300px] cursor-pointer flex-col items-center justify-center p-8 text-center"
        >
          <input {...getInputProps()} />
          <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
              <Icons.Upload className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              {isDragActive || dragActive
                ? "Drop your image here"
                : "Upload an image"}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Drag and drop your image here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground">
              Supports JPG, PNG, GIF, WebP (max 10MB)
            </p>
            <Button variant="outline" className="mt-4" type="button">
              <Icons.Upload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
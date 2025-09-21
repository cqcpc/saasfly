'use client';

import { useState } from 'react';
import { Button } from '@saasfly/ui/button';
import { Input } from '@saasfly/ui/input';
// import { Textarea } from '@saasfly/ui/textarea'; // Not available, using standard textarea
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@saasfly/ui/card';
import { Label } from '@saasfly/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@saasfly/ui/select';
import { Upload, Image as ImageIcon, Loader2 } from 'lucide-react';

export default function ImageToPromptPage() {
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [modelType, setModelType] = useState('general');
  const [language, setLanguage] = useState('en');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setPrompt('');

    try {
      const formData = new FormData();
      
      if (file) {
        formData.append('file', file);
      } else if (imageUrl) {
        formData.append('imageUrl', imageUrl);
      } else {
        throw new Error('Please provide an image file or URL');
      }
      
      formData.append('modelType', modelType);
      formData.append('language', language);

      const response = await fetch('/api/image-to-prompt', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json() as {
        error?: string;
        prompt?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? 'Failed to generate prompt');
      }

      setPrompt(result.prompt ?? '');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImageUrl(''); // Clear URL when file is selected
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
    if (e.target.value) {
      setFile(null); // Clear file when URL is entered
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Image to Prompt Generator</h1>
        <p className="text-muted-foreground">
          Upload an image or provide a URL to generate detailed AI prompts
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5" />
              Image Input
            </CardTitle>
            <CardDescription>
              Choose an image file or enter an image URL
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file">Upload Image File</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="flex-1"
                  />
                  <Upload className="h-4 w-4 text-muted-foreground" />
                </div>
                {file && (
                  <p className="text-sm text-muted-foreground">
                    Selected: {file.name}
                  </p>
                )}
              </div>

              {/* URL Input */}
              <div className="space-y-2">
                <Label htmlFor="url">Or Enter Image URL</Label>
                <Input
                  id="url"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={imageUrl}
                  onChange={handleUrlChange}
                />
              </div>

              {/* Model Type */}
              <div className="space-y-2">
                <Label htmlFor="modelType">Prompt Type</Label>
                <Select value={modelType} onValueChange={setModelType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select prompt type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="artistic">Artistic</SelectItem>
                    <SelectItem value="photographic">Photographic</SelectItem>
                    <SelectItem value="detailed">Detailed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Language */}
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="zh">中文</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                    <SelectItem value="ko">한국어</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading || (!file && !imageUrl)}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Prompt'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Output */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Prompt</CardTitle>
            <CardDescription>
              AI-generated prompt based on your image
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-md p-4 mb-4">
                <p className="text-destructive text-sm">{error}</p>
              </div>
            )}
            
            {prompt ? (
              <div className="space-y-4">
                <textarea
                  value={prompt}
                  readOnly
                  className="flex min-h-[300px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Generated prompt will appear here..."
                />
                <Button
                  variant="outline"
                  onClick={() => navigator.clipboard.writeText(prompt)}
                  className="w-full"
                >
                  Copy to Clipboard
                </Button>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[300px] border-2 border-dashed border-muted-foreground/25 rounded-md">
                <p className="text-muted-foreground text-center">
                  {loading ? 'Generating prompt...' : 'Upload an image to generate a prompt'}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
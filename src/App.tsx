import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Slider } from "@/components/ui/slider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="px-6 py-3  flex items-center justify-between border-b">
          <h1 className="tex-xl font-bold">Upload AI</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Desenvolvido com 💓 pela Rocketseat!
            </span>
            <Separator orientation="vertical" className="h-6" />

            <Button variant="outline" onClick={() => alert('Verucia')}>
              <Github className="w-4 h-4  mr2" />
              Github
            </Button>
          </div>
        </div>
        <main className="flex-1  p-6 flex gap-6">
          <div className="flex flex-col flex-1 gap-4 ">
            <div className="grid grid-rows-2 gap-4 flex-1 ">
              <Textarea
                placeholder="Inclua o prompt para a IA:"
                className="resize-none p-4 leading-relaxed"
              />
              <Textarea
                className="resize-none p-4 leading-relaxed"
                placeholder="Resultado gerado pela IA:"
                readOnly
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Lembre-se: você pode utilizar a variável
              <code className="text-violet-400">{`{transcription}`}</code> no seu prompt para
              adicionar o conteúdo da transcrição do vídeo selecionado.
            </p>
          </div>

          <aside className="w-80  space-y-6">
            <form className="space-y-6">
              <label
                htmlFor="video"
                className="border flex flex-col gap-2 items-center justify-center
           hover:bg-primary/5
           
           tex-muted-foreground cursor-pointer border-dashed text-sm rounded-md aspect-video"
              >
                <FileVideo className="w-4 h-4" />
                Selecione um video...
              </label>
              <input type="file" id="video" accept="video/mp4" className="sr-only" />
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="transcription_prompt" className="h-6">
                  Prompt de Transcrição
                </Label>
                <Textarea
                  id="transcription_prompt"
                  className="min-h-20 leading-relaxed resize-none" 
                  placeholder="Inclua palavras chave mensionadas no video separadas por ',"
                />
              </div>
            </form>

            <Button 
             type="submit"
            
              className="w-full">
              <Upload  className="w-4 h-4 ml-2"/>
            </Button>
            <Separator />

            <form className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="transcription_prompt" className="h-6">
                  Prompt
                </Label>
              
                <Select >
                  <SelectTrigger >
                  <SelectValue placeholder="Selecione um pormpt..."/>
                  </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tittle">
                        Titulo do Youtube
                      </SelectItem>
                      <SelectItem value="description">
                     Descrição  do Youtube
                      </SelectItem>
                    </SelectContent>
                </Select>
                <span className="block text-xs text-muted-foreground italic">Voce poderá customizar essa opção em breve</span>

              </div>
            <div className="space-y-2">
                <Label htmlFor="transcription_prompt" className="h-6">
                  Modelo
                </Label>
                <Textarea
                  id="transcription_prompt"
                  className="min-h-20 leading-relaxed"
                  placeholder="Inclua palavras chave mensionadas no video separadas por ',"
                />
                <Select defaultValue='gpt-3.5'>
                  <SelectTrigger >
                  <SelectValue />
                  </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-3.5">
                        GPT - 3.5-trubo-16k 
                      </SelectItem>
                    </SelectContent>
                </Select>
                <span className="block text-xs text-muted-foreground italic">Voce poderá customizar essa opção em breve</span>

              </div>
            <Separator />
            <div className="space-y-4 flex flex-col">
            <Label  className="h-6">
                  Temperatura
                </Label>
              
                <Slider defaultValue={[33]} min={0} max={100} step={0.1} />
                <span  className="text-xs  text-muted-foreground italic leading-relaxed">
                  Valores mais Altos tendem a deixar o resultado mais criativo
                </span>

              </div>
            <Separator />

            <Button 
             type="submit"
            
              className="w-full">
                Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>

            </form>
          </aside>
        </main>
      </div>
    </>
  )
}

export default App

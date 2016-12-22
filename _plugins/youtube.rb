class YouTube < Liquid::Tag
  Syntax = /^\s*([^\s]+)(\s+(\d+)\s+(\d+)\s*)?/
 
  def initialize(tagName, markup, tokens)
    super
 
    if markup =~ Syntax then
      @id = $1 
    else
      raise "No YouTube ID provided in the \"youtube\" tag"
    end
  end
 
  def render(context)
    "<div class='video-container'><iframe src='http://www.youtube.com/embed/#{@id}' frameborder='0' width='560' height='315'> </iframe></div>"
  end
 
  Liquid::Template.register_tag "youtube", self
end
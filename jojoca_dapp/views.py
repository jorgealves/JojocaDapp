from __future__ import unicode_literals

from django.views.generic import TemplateView

class HomePage(TemplateView):
    template_name = "index.html"

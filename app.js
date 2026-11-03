function exportarArte() {
    // 1. Remove temporariamente a seleção para a imagem sair limpa (sem alças/bordas)
    deselecionarTudo();

    const canvasElement = document.getElementById('canvas-preview');

    // 2. Executa a biblioteca html2canvas no elemento do canvas
    html2canvas(canvasElement, {
        scale: 2, // Aumenta a qualidade/resolução da imagem exportada (2x)
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        // 3. Converte o canvas gerado em URL de dados (PNG)
        const imagemURL = canvas.toDataURL('image/png');

        // 4. Cria um link invisível para disparar o download automaticamente
        const link = document.createElement('a');
        link.href = imagemURL;
        link.download = 'meu-design-editavel.png';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(err => {
        console.error("Erro ao exportar imagem:", err);
        alert("Ocorreu um erro ao gerar a imagem. Tente novamente.");
    });
}
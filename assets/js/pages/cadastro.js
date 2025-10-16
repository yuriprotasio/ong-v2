export function cadastroTemplate() {
  return `
    <form id="cadastroForm">
      <fieldset class="card p-3">
        <legend>Informações Pessoais</legend>

        <div class="form-grid">
          <div class="form-field">
            <label for="nome">Nome Completo</label>
            <input type="text" id="nome" name="nome" required>
          </div>

          <div class="form-field">
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" required>
          </div>

          <div class="form-field">
            <label for="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" required pattern="[0-9]{11}" placeholder="00000000000">
          </div>

          <div class="form-field">
            <label for="telefone">Telefone</label>
            <input type="tel" id="telefone" name="telefone" required pattern="[0-9]{11}" placeholder="11912345678">
          </div>

          <div class="form-field">
            <label for="data_nascimento">Data de Nascimento</label>
            <input type="date" id="data_nascimento" name="data_nascimento" required>
          </div>

          <div class="form-field">
            <label for="cep">CEP</label>
            <input type="text" id="cep" name="cep" required pattern="[0-9]{8}" placeholder="00000000">
          </div>

          <div class="form-field">
            <label for="endereco">Endereço</label>
            <input type="text" id="endereco" name="endereco" required>
          </div>

          <div class="form-field">
            <label for="cidade">Cidade</label>
            <input type="text" id="cidade" name="cidade" required>
          </div>

          <div class="form-field">
            <label for="estado">Estado</label>
            <select id="estado" name="estado" required>
              <option value="">Selecione</option>
              <option value="SP">SP</option>
              <option value="RJ">RJ</option>
              <option value="MG">MG</option>
              <option value="BA">BA</option>
            </select>
          </div>
        </div>

        <div style="margin-top:var(--space-3)" class="flex gap-2">
          <button class="btn btn-primary" type="submit">Enviar Cadastro</button>
          <button class="btn btn-ghost" type="reset">Limpar</button>
        </div>
      </fieldset>
    </form>
  `;
}